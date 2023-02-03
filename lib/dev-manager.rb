require 'active_support'
require 'dotenv'
require 'pry'
Dotenv.load

require_relative 'helpers/color_helper'
require_relative 'helpers/input_helper'

require_relative 'model/report'

require_relative 'services/gitlab_service'
require_relative 'services/jira_service'
require_relative 'services/slack_service'

require_relative 'dev_manager'
require_relative 'setup'
