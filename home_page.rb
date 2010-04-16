require 'erector'

class HomePage < Erector::Widget
  
  def content
    html do
      head do
        title 'Tic Tac Toe'
        link :href => "/style.css", :rel => "stylesheet", :type => "text/css"   
        script :src => '/tictactOO.js', :type => 'text/javascript'
        script :src => '/jquery.js', :type => 'text/javascript'
      end
      
      body do
        h2 'Noughts and Crosses'
        
        span :class => 'whose_turn' do
          text 'nought'
        end
        
        text "'s turn"
       
        br
        br
       
        table :cellpadding => '0', :cellspacing => '0' do
          draw_board(3)
        end
       
      end
    end
  end

  def draw_board(size)
    x = 0
    size.times do 
      tr :class => 'board_row' do
        y = 0
        size.times do 
          square_id = "#{x}#{y}"
          td :class => 'empty', :id => square_id, :onclick => "g.move(#{x},#{y})" do
            rawtext '&nbsp;'
          end
          y += 1
        end
      end
      x += 1
    end
  end

end

