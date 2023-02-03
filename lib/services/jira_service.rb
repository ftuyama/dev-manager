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

      # Fetch tickets assigned to the developer in the last 14 days
      assignee = JIRA_DEV_USERS[dev_index]
      jql = "assignee = #{assignee} AND updated >= '#{start_of_last_30_days}'"
      @client.Issue.jql(jql)
    end

    def get_jira_points(issues)
      issues.map do |issue|
        if issue.fields[ENV['JIRA_TICKET_POINT_FIELD']].present?
          issue.fields[ENV['JIRA_TICKET_POINT_FIELD']].to_i
        else
          4 # average pointing
        end
      end
    end

    def get_jira_issue_labels(issues)
      issues.flat_map do |issue|
        issue.fields["labels"]
      end.uniq
    end
  end
end
