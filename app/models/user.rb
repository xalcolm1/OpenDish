# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  session_token   :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  image_url       :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  firstname       :string
#  lastname        :string
#
class User < ApplicationRecord
    validates :email, presence: true, uniqueness: true, format: {with: /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i , message: 'Invalid email format, please try again'}

    validates :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}
    attr_reader :password

    after_initialize :ensure_session_token

    has_many :restaurants,
        foreign_key: :owner_id,
        class_name: :Restaurant

    has_many :reviews,
        foreign_key: :user_id,
        class_name: :Review

    has_many :reservations,
        foreign_key: :user_id,
        class_name: :Reservation
    
    has_many :reserved_restaurants, 
        through: :reservations,
        source: :restaurant
    

    has_one_attached :photo

    # validate email


    # def is_email?(email)
    #     return false if email.nil?

    #    return email.match(regex)

     # email_segments = email.split('@'
        # # email is invalid if the last segment of the email has a dot at the begginning, or a 
        # return false if email_segments.length < 2
        # email_segments[-1].each_char do |char, idx| 
        #     idx == 0 ? false : true if char == '.'
        # end
    # end

       

    #spire

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        user && user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password=password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end
end
