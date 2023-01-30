require 'jira-ruby'

# Setup client
options = {
  username: ENV['JIRA_USERNAME'],
  password: ENV['JIRA_PASSWORD'],
  site: 'https://your-jira-instance.atlassian.net',
  context_path: '',
  auth_type: :basic,
}

client = JIRA::Client.new(options)

# Fetch tickets assigned to the developer in the last 14 days
assignee = ENV["JIRA_USER"]
start_of_last_14_days = (Date.today - 14).to_s
jql = "assignee = #{assignee} AND updated >= '#{start_of_last_14_days}'"
issues = client.Issue.jql(jql)

# Print the ticket summaries
issues.each do |issue|
  puts issue.summary
end
