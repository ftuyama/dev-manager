require 'helper'

class DevManagerTest < MiniTest::Test

  def test_generate_report
    report = DevManager.generate_report

    assert_nil report
  end

end
