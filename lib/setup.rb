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
        puts "Please type the dev names (separated by ','):"
        write_to_env_file('DEVS', get_input_list.to_s)
      end

      if ENV['TEAMS'].blank?
        puts "Please type the dev team names (separated by ','):"
        write_to_env_file('TEAMS', get_input_list.to_s)
      end
    end

    def self.setup_gitlab
      if GITLAB_CONFIG.any? { |env_variable| ENV[env_variable].blank? }
        puts "Do you want to configure Gitlab? (y/n)"
        return if get_letter_input != 'y'
      end

      if ENV['GITLAB_URL'].blank?
        puts "Please enter the Gitlab URL (for example https://gitlab.com/api/v4):"
        write_to_env_file('GITLAB_URL', get_input)
      end

      if ENV['GITLAB_TOKEN'].blank?
        puts "Please enter the Gitlab TOKEN"
        write_to_env_file('GITLAB_TOKEN', get_input)
      end

      if ENV['GITLAB_DEV_IDS'].blank?
        return puts "Please run setup again" if ENV['GITLAB_TOKEN'].blank?

        puts "Please type the Gitlab usernames (separated by ','):"
        users = GitlabService.instance.fetch_users(get_input_list)
        write_to_env_file('GITLAB_DEV_IDS', users.to_s)
      end

      if ENV['GITLAB_PROJECT_ID'].blank?
        return puts "Please run setup again" if ENV['GITLAB_TOKEN'].blank?

        puts "Please type the Gitlab project name with its namespace (ruby/ruby):"
        write_to_env_file('GITLAB_PROJECT_ID', GitlabService.instance.find_project(get_input))
      end
    end

    def self.setup_jira
      if JIRA_CONFIG.any? { |env_variable| ENV[env_variable].blank? }
        puts "Do you want to configure Jira? (y/n)"
        return if get_letter_input != 'y'
      end

      if ENV['JIRA_URL'].blank?
        puts "Please enter the Jira URL (for example https://jira.thetrainline.com):"
        write_to_env_file('JIRA_URL', get_input)
      end

      if ENV['JIRA_USERNAME'].blank?
        puts "Please enter the Jira username (email you sign-in to Jira)"
        write_to_env_file('JIRA_USERNAME', get_input)
      end

      if ENV['JIRA_TOKEN'].blank?
        puts "Please enter the Jira TOKEN"
        write_to_env_file('JIRA_TOKEN', get_input)
      end

      if ENV['JIRA_DEV_USERS'].blank?
        puts "Please type the Jira usernames (separated by ','):"
        write_to_env_file('JIRA_DEV_USERS', get_input_list)
      end
    end

    def self.setup_slack
      if SLACK_CONFIG.any? { |env_variable| ENV[env_variable].blank? }
        puts "Do you want to configure Slack? (y/n)"
        return if get_letter_input != 'y'
      end

      if ENV['SLACK_TOKEN'].blank?
        puts "Please enter the Slack TOKEN"
        write_to_env_file('SLACK_TOKEN', get_input)
      end

      if ENV['SLACK_CHANNELS'].blank?
        puts "Please enter the Slack channels (for example general) (separated by ','):"
        channels = SlackService.instance.find_slack_channels(get_input_list)
        write_to_env_file('SLACK_CHANNELS', channels)
      end

      if ENV['SLACK_DEV_IDS'].blank?
        puts "Please enter the Slack usernames (separated by ','):"
        users = SlackService.instance.fetch_users(get_input_list)
        write_to_env_file('SLACK_DEV_IDS', users)
      end
    end

  end
end
