ENV['RACK_ENV'] = 'test'
ENV['DEVS']='["Yukihiro Matsumoto"]'
ENV['TEAMS']='["Ruby"]'

require "minitest/autorun"
require "mocha/minitest"
require_relative '../lib/dev-manager'
