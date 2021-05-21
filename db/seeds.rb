# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "faker"
Trainer.destroy_all
4.times do
  trainer = Trainer.create(name: Faker::Name.unique.first_name, age: rand(15..50))
  4.times do
    pokemon = trainer.pokemons.create(name: Faker::Games::Pokemon.name)
    4.times do
      pokemon.attacks.create(move: Faker::Games::Pokemon.move, power: rand(100..200))
    end
  end
end
puts Trainer.all.size
puts Pokemon.all.size
puts Attack.all.size