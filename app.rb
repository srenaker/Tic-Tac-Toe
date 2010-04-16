require 'rubygems'
require 'sinatra'
require 'erector'
require 'home_page'

get '/' do
  HomePage.new.to_s
end
