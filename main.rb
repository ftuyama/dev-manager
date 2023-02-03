require_relative 'lib/dev-manager'

if ARGV.pop == "setup"
  DevManager::Setup.setup
else
  DevManager.generate_report
end
