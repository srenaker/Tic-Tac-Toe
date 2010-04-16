
var game = {
	
	move : function(x,y) {
		if (squareEmpty(x,y)){
			$('#' + x + y).addClass(turn).removeClass('empty');
			updateTurn(turn);
		}
	},
	
	squareEmpty : function(x,y){
		squareId = '#' + x + y;
	 	return $(squareId).hasClass('empty');
	},
	
	updateTurn : function(turn){
		(currTurn == 'nought') ? turn = 'cross' : turn = 'nought';
		$('.whose_turn').html(turn);
	}
}