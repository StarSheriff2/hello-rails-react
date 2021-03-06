# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Greeting.destroy_all

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
