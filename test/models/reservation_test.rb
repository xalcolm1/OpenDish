# == Schema Information
#
# Table name: reservations
#
#  id            :bigint           not null, primary key
#  date          :datetime         not null
#  user_id       :integer
#  restaurant_id :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
require 'test_helper'

class ReservationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
