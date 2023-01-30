require 'slack-ruby-client'

Slack.configure do |config|
  config.token = ENV['SLACK_TOKEN']
end

client = Slack::Web::Client.new

# Fetch the messages from a specific channel
channel_id = ENV['SLACK_CHANNEL']
messages = client.conversations_history(channel: channel_id)

# Print the messages
messages["messages"].each do |message|
  puts message["text"]
end
