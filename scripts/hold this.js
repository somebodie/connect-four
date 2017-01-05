// gamePiece.style.postion.top (or bottom and negative) (howmanyitneeds to fall in place)

// IDEA: $('.div this').html(makeMove[activePlayer]);

// read entire board
for (int i = 0; i < cols; i++) {
  for (int j = 0; j < rows; j++) {
    myArray[i][j] = 0;
  }
}


$('column').click(function() {
  console.log("that's your move?");
// pickSpace.alternatePlayer;
});

var pickSpace =
    switch ($('div.columns').click()) {
        case $('#gamePiece').hasClass('redPlayer'):
            $('div:last').addClass('redPlayer')
            break;
        case $('#gamePiece').hasClass('yellowPlayer'):
            $('div:last').addClass('yellowPlayer')
            break;
        default:
            alert('did you pick something on the board?');
    }
