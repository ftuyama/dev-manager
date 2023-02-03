require 'active_support'
require 'active_support/core_ext'
require 'active_support/time'
require 'dotenv'
require 'pry'
Dotenv.load

require_relative 'helpers/chart_helper'
require_relative 'helpers/input_helper'
require_relative 'helpers/time_helper'

require_relative 'model/report'

require_relative 'services/service'
require_relative 'services/gitlab_service'
require_relative 'services/jira_service'
require_relative 'services/slack_service'

require_relative 'dev_manager'
require_relative 'setup'
