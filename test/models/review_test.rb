# == Schema Information
#
# Table name: reviews
#
#  id            :bigint           not null, primary key
#  body          :text             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  user_id       :bigint           not null
#  restaurant_id :bigint           not null
#  overall       :integer
#  food          :integer
#  service       :integer
#  ambiance      :integer
#
require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  # RSpec.describe 'Review' do           #
  #   context 'before publication' do  
  #     it 'cannot have comments' do   
  #       expect { Post.create.comments.create! }.to raise_error(ActiveRecord::RecordInvalid)  # test code
  #     end
  #   end
  # end
end
