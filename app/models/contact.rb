class Contact
  include ActiveModel::Model
  attr_accessor :company_name, :name, :tel, :email, :email_confirmation, :question
  with_options presence: true do
    validates :name
    validates :email, confirmation: true
  end
end
