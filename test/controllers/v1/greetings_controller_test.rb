require "test_helper"

class V1::GreetingsControllerTest < ActionDispatch::IntegrationTest
  test "should get hello" do
    get v1_greetings_hello_url
    assert_response :success
  end
end
