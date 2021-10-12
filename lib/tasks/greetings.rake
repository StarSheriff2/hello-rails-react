# frozen_string_literal: true

namespace :greetings do
  desc 'Seeds messages'
  task seed_messages: :environment do
    Greeting.create!([{
                       message: 'What\'s up, Doc?'
                     },
                      {
                        message: 'What\'s cooking?'
                      },
                      {
                        message: 'How ya doin\'?'
                      },
                      {
                        message: 'Hello there!'
                      },
                      {
                        message: 'Howdy!'
                      }])

    p "Created #{Greeting.count} greetings"
  end
end
