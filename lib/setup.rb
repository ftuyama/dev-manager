module DevManager
  class Setup
    extend InputHelper

    GITLAB_CONFIG = %w[
      GITLAB_URL
      GITLAB_TOKEN
      GITLAB_DEV_IDS
      GITLAB_PROJECT_ID
    ]

    JIRA_CONFIG = %w[
      JIRA_URL
      JIRA_USERNAME
      JIRA_TOKEN
      JIRA_DEV_USERS
    ]

    SLACK_CONFIG = %w[
      SLACK_CHANNELS
      SLACK_TOKEN
      SLACK_DEV_IDS
    ]

    def self.setup
      setup_devs
      setup_gitlab
      setup_jira
      setup_slack
    end

    def self.setup_devs
      if ENV['DEVS'].blank?
        write_to_env_file('DEVS', get_input_list("Please type the dev names (separated by ','):").to_s)
      end

      if ENV['TEAMS'].blank?
        write_to_env_file('TEAMS', get_input_list("Please type the dev team names (separated by ','):").to_s)
      end
    end

    def self.setup_gitlab
      return if GITLAB_CONFIG.any? { |env_variable| ENV[env_variable].blank? } &&
        get_letter_input("Do you want to configure Gitlab? (y/n)") != 'y'

      if ENV['GITLAB_URL'].blank?
        url = get_input("Please enter the Gitlab URL (for example https://gitlab.com/api/v4):")
        write_to_env_file('GITLAB_URL', url)
      end

      if ENV['GITLAB_TOKEN'].blank?
        token = get_input("Please enter the Gitlab TOKEN (generate it on https://gitlab.trainline.tools/-/profile/personal_access_tokens)")
        write_to_env_file('GITLAB_TOKEN', token)
      end

      return puts "Please run setup again" if ENV['GITLAB_TOKEN'].blank?

      while get_letter_input("Do you want to find devs? (y/n)") == 'y'
        user = get_input("Type his name:")
        puts GitlabService.fetch_user(user).to_h
      end

      if ENV['GITLAB_DEV_IDS'].blank?
        users_list = get_input_list("Please type the Gitlab usernames (separated by ','):")

        users = GitlabService.instance.fetch_users(users_list)
        write_to_env_file('GITLAB_DEV_IDS', users.to_s)
      end

      if ENV['GITLAB_PROJECT_ID'].blank?
        project = get_input("Please type the Gitlab project name with its namespace (ruby/ruby):")
        write_to_env_file('GITLAB_PROJECT_ID', GitlabService.instance.find_project(project))
      end
    end

    def self.setup_jira
      return if JIRA_CONFIG.any? { |env_variable| ENV[env_variable].blank? } &&
        get_letter_input("Do you want to configure Jira? (y/n)") != 'y'

      if ENV['JIRA_URL'].blank?
        url = get_input("Please enter the Jira URL (for example https://jira.thetrainline.com):")
        write_to_env_file('JIRA_URL', url)
      end

      if ENV['JIRA_USERNAME'].blank?
        username = get_input("Please enter the Jira username (email you sign-in to Jira)")
        write_to_env_file('JIRA_USERNAME', username)
      end

      if ENV['JIRA_TOKEN'].blank?
        token = get_input("Please enter the Jira TOKEN")
        write_to_env_file('JIRA_TOKEN', token)
      end

      if ENV['JIRA_DEV_USERS'].blank?
        jira_usernames = get_input_list("Please type the Jira usernames (separated by ','):")
        write_to_env_file('JIRA_DEV_USERS', jira_usernames)
      end
    end

    def self.setup_slack
      return if SLACK_CONFIG.any? { |env_variable| ENV[env_variable].blank? } &&
        get_letter_input("Do you want to configure Slack? (y/n)") != 'y'

      if ENV['SLACK_TOKEN'].blank?
        write_to_env_file('SLACK_TOKEN', get_input("Please enter the Slack TOKEN"))
      end

      if ENV['SLACK_CHANNELS'].blank?
        slack_channels = get_input_list("Please enter the Slack channels (for example general) (separated by ','):")
        channels = SlackService.instance.find_slack_channels(slack_channels)
        write_to_env_file('SLACK_CHANNELS', channels)
      end

      if ENV['SLACK_DEV_IDS'].blank?
        slack_usernames = get_input_list("Please enter the Slack usernames (separated by ','):")
        users = SlackService.instance.fetch_users(slack_usernames)
        write_to_env_file('SLACK_DEV_IDS', users)
      end
    end

  end
end
