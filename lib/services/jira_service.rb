require 'jira-ruby'

module DevManager
  class JiraService < SingletonService
    JIRA_DEV_USERS = JSON.parse(ENV['JIRA_DEV_USERS'] || "[]")

    def initialize
      super

      # Make a singleton class
      @client = JIRA::Client.new({
        site: ENV['JIRA_URL'],
        username: ENV['JIRA_USERNAME'],
        password: ENV['JIRA_TOKEN'],
        context_path: '',
        auth_type: :basic,
      })
    end

    def fetch_dev_tickets(dev_index)
      return [] if ENV['JIRA_TOKEN'].blank?

      # Fetch tickets assigned to the developer in the last days
      assignee = JIRA_DEV_USERS[dev_index]
      jql = "assignee = #{assignee} AND created >= '#{start_of_last_30_days}'"
      @client.Issue.jql(jql)
    end

    def get_jira_points(issues)
      issues.map { |i| issue_points(i) }
    end

    def issue_points(issue)
      points = issue.fields[ENV['JIRA_TICKET_POINT_FIELD']]

      points.present? ? points.to_i : 3 # average pointing
    end

    def get_jira_issue_labels(issues)
      issues.flat_map do |issue|
        issue.fields["labels"]
      end.uniq
    end

    def debug_issues(issues)
      puts (issues.map { |i| "#{issue_points(i)} #{i.fields['summary']}" })
    end
  end
end
