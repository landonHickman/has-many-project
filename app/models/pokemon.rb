class Pokemon < ApplicationRecord
  has_many :attacks, dependent: :destroy
  belongs_to :trainer
end
