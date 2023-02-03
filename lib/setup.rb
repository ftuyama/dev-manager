module DevManager
  class Setup
    extend InputHelper

    GITLAB_CONFIG = %w[
      GITLAB_URL
      GITLAB_TOKEN
      GITLAB_DEV_IDS
      GITLAB_PROJECT_ID
    ]

    SLACK_CONFIG = %w[
      SLACK_CHANNEL
      SLACK_TOKEN
    ]

    def self.setup
      setup_devs
      setup_gitlab
      setup_slack
    end

    def self.setup_devs
      if ENV['DEVS'].blank?
        puts "Please type the dev names (separated by ','):"
        write_to_env_file('DEVS', get_input_list.to_s)
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
        users = GitlabService.new.find_users(get_input_list)
        write_to_env_file('GITLAB_DEV_IDS', users.to_s)
      end

      if ENV['GITLAB_PROJECT_ID'].blank?
        return puts "Please run setup again" if ENV['GITLAB_TOKEN'].blank?

        puts "Please type the Gitlab project name with its namespace (ruby/ruby):"
        write_to_env_file('GITLAB_PROJECT_ID', GitlabService.new.find_project(get_input))
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

      if ENV['SLACK_CHANNEL'].blank?
        puts "Please enter the Slack channel name (for example general):"
        channel = SlackService.new.find_slack_channel(get_input)
        write_to_env_file('SLACK_CHANNEL', channel)
      end

      if ENV['SLACK_DEV_IDS'].blank?
        puts "Please enter the Slack usernames (separated by ','):"
        users = SlackService.new.find_users(get_input_list)
        write_to_env_file('SLACK_DEV_IDS', users)
      end
    end

  end
end
