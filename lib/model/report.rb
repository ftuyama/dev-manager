require 'json'

module DevManager
  class Report
    include ChartHelper

    def initialize(dev_reports = [])
      @dev_reports = dev_reports
    end

    def load_report
      JSON.parse(File.read("report/report.json"))
    end

    def store_report
      File.open("report/report.json", "w") do |f|
        standardize_data!
        f.write(JSON.pretty_generate(fancy_report))
      end
    end

    def standardize_data!
      max_skill = {}

      @dev_reports.first["Skills"].each_key do |skill|
        max_skill[skill] = @dev_reports.map { |r| r["Skills"][skill] }.max
        max_skill[skill] = [max_skill[skill], 1].max
      end

      @dev_reports.each do |dev_report|
        dev_report["Skills"].each_key do |skill|
          dev_report["Skills"][skill] = 100 * dev_report["Skills"][skill] / max_skill[skill]
        end
      end
    end

    def fancy_report
      @dev_reports.each_with_index.map do |dev_report, i|
        {
          "label": dev_report["Name"],
          "data": dev_report["Skills"].values,
        }.merge(CHART_CONFIG[i])
      end
    end
  end
end
