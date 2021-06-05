class RiittController < ApplicationController
  before_action :common
  def index
    
  end
  def common
    @header = COMMON::HEADER
  end
end
