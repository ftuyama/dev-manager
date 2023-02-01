ENV['RACK_ENV'] = 'test'

require "minitest/autorun"
require "mocha/minitest"
require_relative '../lib/dev-manager'
