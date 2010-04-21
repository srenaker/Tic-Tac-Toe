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
    
    it "updates a square's class a move is made" do
      js("g.move(0,0);")
      js("$('#00').hasClass('nought')").should be_true
      js("$('#00').hasClass('empty')").should be_false      
    end
    
    it "knows whether a square is empty or not" do
      js("g.squareEmpty(1,2)").should be_true
      js("g.move(1,2);")
      js("g.squareEmpty(1,2)").should be_false     
    end
    
    it "updates the page to show whose turn it is" do
      js("g.updateTurn('nought');")
      js("$('.whose_turn').text()").should == "cross"
    end
    
    describe "it notices when someone has won" do

      before do
        js("$('#00').addClass('nought');")
      end

      it "checks for 3 across" do        
        js("$('#10').addClass('nought');")
        js("$('#20').addClass('nought');")
        js("g.lookAcross('nought');").should == 'nought'
      end
      
      it "checks for 3 down" do
        js("$('#01').addClass('nought');")
        js("$('#02').addClass('nought');")
        js("g.lookDown('nought');").should == 'nought'        
      end
      
      it "checks for 3 diagonally" do
        js("$('#11').addClass('nought');")
        js("$('#22').addClass('nought');")
        js("g.lookDiagonal('nought');").should == 'nought'        
      end
      
      it "turns the winning row red" do
        js("g.turnRed([[0,0],[1,1],[2,2]])")
        js("$('#22').hasClass('redSquare');").should be_true;
      end
      
    end
  end
end