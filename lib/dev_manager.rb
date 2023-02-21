module DevManager
  def self.generate_report
    puts "Generating report..."

    dev_reports = fetch_dev_reports

    Report.new(dev_reports).store_report
  end

  def self.fetch_dev_reports
    JSON.parse(ENV['DEVS']).each_with_index.map do |dev, i|
      dev_team = ENV['TEAMS'][i]

      gitlab_mrs = GitlabService.instance.fetch_dev_merge_requests(i)
      gitlab_comments = GitlabService.instance.fetch_dev_comments(i, gitlab_mrs)

      jira_tickets = JiraService.instance.fetch_dev_tickets(i)
      jira_points = JiraService.instance.get_jira_points(jira_tickets)

      slack_messages = SlackService.instance.fetch_dev_messages(i)
      slack_reactions = SlackService.instance.fetch_dev_reactions(i, slack_messages)

      {
        "Name"          => dev,
        "Team"          => dev_team,
        "Skills"        => {
          "Coding"        => gitlab_mrs.count,
          "Code Review"   => gitlab_comments.count,
          "Versatility"   => jira_tickets.count,
          "Delivery"      => jira_points.sum,
          "Charisma"      => slack_reactions,
          "Communication" => slack_messages.count,
        },
      }
    end
  end
end
