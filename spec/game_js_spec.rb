require 'harmony'
require 'home_page'

describe 'Game' do
  
  def js(cmd)
    @dom.execute_js(cmd)
  end
  
  before do
    @dom = Harmony::Page.new(HomePage.new.to_s)
    @dom.load(File.expand_path( File.dirname(__FILE__) + "/../public/js/jquery.js"))
    @dom.load(File.expand_path( File.dirname(__FILE__) + "/../public/js/tictactoe.js"))
  end
  
  describe 'board setup' do
    it 'draws a board with empty squares' do
      js("$('#00').hasClass('empty')").should be_true
    end
  end
  
  describe 'game play' do
    before do
      js("$('#00').click();")
    end
    
    it "updates a square's class when clicked" do
      js("$('#00').hasClass('nought')").should be_true
      js("$('#00').hasClass('empty')").should be_false      
    end
    
    it "updates the page to show whose turn it is" do
      js("$('.whose_turn').text()").should == "cross"
    end
  end
  
end