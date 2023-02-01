require 'helper'

module DevManager
  class RerportTest < MiniTest::Test

    def setup
      @report = Report.new
    end

    def test_store_report
      File.expects(:open).once

      @report.store_report
    end

  end
end
