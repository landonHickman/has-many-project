class CreateAttacks < ActiveRecord::Migration[6.1]
  def change
    create_table :attacks do |t|
      t.string :move
      t.string :power
      t.belongs_to :pokemon, null: false, foreign_key: true

      t.timestamps
    end
  end
end
