module DevManager
  def self.generate_report(*args)
    puts "Generating report..."

    gitlab_mrs = GitlabService.new.fetch_merge_requests
    jira_tickets = JiraService.new.fetch_tickets
    slack_messages = SlackService.new.fetch_messages

    Report.new({
      "Coding"        => gitlab_mrs.count,
      "Code Review"   => gitlab_mrs.count,
      "Versatility"   => jira_tickets.count,
      "Delivery"      => jira_tickets.count,
      "Charisma"      => slack_messages.count,
      "Communication" => slack_messages.count,
    }).store_report
  end
end
