var turn = 'nought';

function move(x,y) {
	if (squareEmpty(x,y)){
		$('#' + x + y).addClass(turn).removeClass('empty');
		updateTurn(turn);
	}
}

function squareEmpty(x,y){
	squareId = '#' + x + y;
 	return $(squareId).hasClass('empty');
}

function updateTurn(currTurn) {
	(currTurn == 'nought') ? turn = 'cross' : turn = 'nought';
	$('.whose_turn').html(turn);
}