
function Game() {
	this.turn = 'nought';
}

Game.prototype = {
	
	move : function(x,y) {
		if (this.squareEmpty(x,y)){
			$('#' + x + y).addClass(this.turn).removeClass('empty');
			this.updateTurn(this.turn);
		}
	},
	
	squareEmpty : function(x,y){
		var squareId = '#' + x + y;
	 	return $(squareId).hasClass('empty');
	},
	
	updateTurn : function(currentTurn){
		(currentTurn == 'nought') ? this.turn = 'cross' : this.turn = 'nought';
		$('.whose_turn').html(this.turn);
	}
}

var g = new Game();
