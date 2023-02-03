require 'jira-ruby'

module DevManager
  class JiraService

    def initialize
      # Setup client
      @client = JIRA::Client.new({
        username: ENV['JIRA_USERNAME'],
        password: ENV['JIRA_PASSWORD'],
        site: 'https://jira.thetrainline.com',
        context_path: '',
        auth_type: :basic,
      })
    end

    def fetch_tickets
      return [] if ENV['JIRA_PASSWORD'].blank?

      # Fetch tickets assigned to the developer in the last 14 days
      assignee = ENV["JIRA_USER"]
      start_of_last_14_days = (Date.today - 14).to_s
      jql = "assignee = #{assignee} AND updated >= '#{start_of_last_14_days}'"
      issues = @client.Issue.jql(jql)

      # Print the ticket summaries
      issues.each do |issue|
        puts issue.summary
      end
    end
  end
end
