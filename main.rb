require 'dotenv'
require_relative 'lib/dev_manager'

Dotenv.load
DevManager.generate_report(ARGV)
