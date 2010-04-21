
function Game() {
	this.players = ['nought', 'cross'];
	this.turn = this.players[0];
}

Game.prototype = {
	
	move : function(x,y) {
		if (this.squareEmpty(x,y)){
			$('#' + x + y).addClass(this.turn).removeClass('empty');
		 	(this.victory()) ? alert(this.victory() + " has won!  nice job.") :	this.updateTurn(this.turn);	
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
		for (var player in this.players) {
			currentPlayer = this.players[player];
			if (this.lookDown(currentPlayer) || this.lookAcross(currentPlayer) || this.lookDiagonal(currentPlayer)) {
				return currentPlayer;
			}
		}
		return false;
	},

	
	lookDiagonal : function(currentPlayer) {
		if (this.lookDiagonalY(0, 'down', currentPlayer) || this.lookDiagonalY(2, 'up', currentPlayer)) {
			return currentPlayer;
		}
		return false;
	},
	
	lookDiagonalY : function(y, dir, player) {
		var winningRow = [];
		for (x = 0; x < 3; x++) {
			if ($("#" + x + y).hasClass(player)) {
				winningRow.push([x, y]);
			} else {
				return false;
			}
			dir == 'down' ?	y++ : y--;
		}
		this.turnRed(winningRow);
		return player;
	},
	
	lookDown : function(player) {
		var winner = null;		
		for (x = 0; x < 3; x++) {
			winner = this.lookDownX(x, player);
			if (winner) {
				return winner;
			}
		}
	},
	
	lookDownX : function(x, player){
		var winningRow = [];
		for (y = 0; y < 3; y++) {
			if ($("#" + x + y).hasClass(player)) {
				winningRow.push([x, y]);
			} else {
				return false;
			} 
		}
		this.turnRed(winningRow);
		return player;		
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
		var winningRow = [];
		for (x = 0; x < 3; x++) {
			if ($("#" + x + y).hasClass(player)) {
				winningRow.push([x, y]);
			} else {
				return false;
			}
		}
		this.turnRed(winningRow);
		return player;
	},
	
	turnRed : function(winningRow) {
		for (coords in winningRow) {
			$("#" + winningRow[coords][0] + winningRow[coords][1]).addClass('redSquare');
		}
	}	
}

var g = new Game();










