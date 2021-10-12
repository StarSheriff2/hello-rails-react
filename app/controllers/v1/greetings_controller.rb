class V1::GreetingsController < ApplicationController
  def index
    render json: { greetings: [
      {
        message: 'Whats up'
      },
      {
        message: 'Hello there'
      }
    ] }.to_json
  end

  def hello
    @greeting = Greeting.find(Greeting.pluck(:id).sample)
  end
end
