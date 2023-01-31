require 'json'

module DevManager
  class Report
    def initialize(data)
      self.report = data.values
    end

    def store_report
      File.open("report.json", "w") do |f|
        f.write(report.to_json)
      end
    end
  end
end
