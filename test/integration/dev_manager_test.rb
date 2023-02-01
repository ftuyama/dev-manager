require 'helper'

module DevManager
  class Test < MiniTest::Test

    def test_generate_report
      GitlabService.any_instance.expects(:fetch_merge_requests).returns([]).once
      JiraService.any_instance.expects(:fetch_tickets).returns([]).once
      SlackService.any_instance.expects(:fetch_messages).returns([]).once

      Report.any_instance.expects(:store_report).once

      DevManager.generate_report
    end

  end
end