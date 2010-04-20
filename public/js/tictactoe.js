
function Game() {
	this.players = ['nought', 'cross'];
	this.turn = this.players[0];
}

Game.prototype = {
	
	move : function(x,y) {
		if (this.squareEmpty(x,y)){
			$('#' + x + y).addClass(this.turn).removeClass('empty');
			if (this.victory()) {
					alert(this.victory() + " has won!  Nice job.");
			} else {
				this.updateTurn(this.turn);				
			}
		}
	},
	
	squareEmpty : function(x,y){
		var squareId = '#' + x + y;
	 	return $(squareId).hasClass('empty');
	},
	
	updateTurn : function(currentTurn){
		(currentTurn == this.players[0]) ? this.turn = this.players[1] : this.turn = this.players[0];
		$('.whose_turn').html(this.turn);
	},
	
	victory : function() {
		var weHaveAWinner = false;
		for (var player in this.players) {
			weHaveAWinner = this.lookAcross(this.players[player]);
			if (weHaveAWinner) {
				return player;
			}
			//lookDown(this.players[player]);
			//lookDiagonal(this.players[player]);
		}
		return false;
	},
	
	lookAcross : function(player) {
		var winner = null;
		for (y = 0; y < 3; y++) {
			winner = this.lookAcrossY(y, player);
			if (winner) {
				return winner;
			}
		}
		return false;
	},
	
	lookAcrossY : function(y, player) {
		for (x = 0; x < 3; x++) {
			//alert('for ' + x + y + ' ' + player + ': ' +  $("#" + x + y).hasClass(player))
			if (!$("#" + x + y).hasClass(player)) {
				return false;
			}
		}
		alert("we have a winner");
		return player;
	}
	
}

var g = new Game();










