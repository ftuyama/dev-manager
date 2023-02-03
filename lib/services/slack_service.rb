require 'slack-ruby-client'

module DevManager
  class SlackService
    SLACK_DEV_IDS = JSON.parse(ENV['SLACK_DEV_IDS'] || "[]")

    def initialize
      Slack.configure do |config|
        config.token = ENV['SLACK_TOKEN']
      end

      @client = Slack::Web::Client.new
    end

    def find_users(usernames)
      members = @client.users_list['members']
      usernames.map do |username|
        members.find do |user|
          user['name'] == username
        end["id"]
      end.compact
    end

    def find_slack_channel(channel_name)
      channels = @client.conversations_list['channels']

      channels.find do |channel|
        channel['name'] == channel_name
      end['id']
    end

    def fetch_dev_messages(dev_index)
      return [] if ENV['SLACK_TOKEN'].blank?

      messages = @client.conversations_history(channel: ENV['SLACK_CHANNEL'])

      messages["messages"].map do |message|
        message if message["user"] == SLACK_DEV_IDS[dev_index]
      end.compact
    end

    def fetch_dev_reactions(dev_index, messages = [])
      return 0 if ENV['SLACK_TOKEN'].blank?

      messages ||= fetch_messages(dev_index)

      messages.map do |message|
        (message["reactions"] || []).map { |r| r["count"] }.sum
      end.sum
    end
  end
end
