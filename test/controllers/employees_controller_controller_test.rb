require 'test_helper'

class EmployeesControllerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get employees_controller_index_url
    assert_response :success
  end

end
