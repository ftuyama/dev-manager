module DevManager
  def self.generate_report(*args)
    puts "Generating report..."

    dev_reports = fetch_dev_reports

    Report.new(dev_reports).store_report
  end

  def self.fetch_dev_reports
    JSON.parse(ENV['DEVS']).each_with_index.map do |dev, i|
      gitlab_mrs = GitlabService.new.fetch_dev_merge_requests(i)
      gitlab_comments = GitlabService.new.fetch_dev_comments(i, gitlab_mrs)
      jira_tickets = JiraService.new.fetch_tickets
      slack_messages = SlackService.new.fetch_messages(i)
      slack_reactions = SlackService.new.fetch_reactions(i, slack_messages)

      {
        "Name"          => dev,
        "Skills"        => {
          "Coding"        => gitlab_mrs.count,
          "Code Review"   => gitlab_comments.count,
          "Versatility"   => jira_tickets.count,
          "Delivery"      => jira_tickets.count,
          "Charisma"      => slack_messages.count,
          "Communication" => slack_reactions,
        },
      }
    end
  end
end
