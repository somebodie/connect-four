$(document).ready(function() {
    console.log('ready!');
})

var currentPlayer = {
                r : 'redPlayer',
                y : 'yellowPlayer'};



//  var selectedLevel;
// var diffucutlty = $('level').val();
// when player clicks makes a selection button diffucutlty changes
//   switch(diffucutlty) {
//     case pvp:
//         selectedLevel = $('#gamePiece').addClass('redPlayer');
//        alternatePlayer;
//         break;
//     case easy:
//        selectedLevel = $('column')Math.Random(div:column);
//         break;
//     case hard:
//         code block
//         break;
//     default:
//         console.log('selection made')
// }

// IDEA: maybe in input to allow to players to pick color

var startGame =
  $( ".start" ).click(function() {
// gamePiece shows red on startGame
    $('#gamePiece').addClass('redPlayer');
    console.log("starting!");
  });

// Should read entire board to allow move and move up div
// some code that listens for column selected;
// var makeMove = $('column').click(function() {
//   console.log("that's your move?");
// appendClass to currentPlayer
// });
//

// var coinMove = // moves piece left to right
// column (makes move)


//
// var placeInColumn;
//   switch (makeMove) {
//   case $('#gamePiece').hasClass('redPlayer'):
//     $('div:last').addClass('redPlayer')
//     break;
//   case $('#gamePiece').hasClass('yellowPlayer'):
//       $('div:last').addClass('yellowPlayer')
//     break;
//   default: alert('did you pick something on the board?');
// }
//


// var alternatePlayer =
//  // switch from redPlayer to yellowPlayer
//  $('pickColumn').click(function(){
//      $('.redPlayer').toggleClass('yellowPlayer');
//  });
//


// // var switch = $('pickColumn').alternatePlayer
//

// // var drop = animation }// when a player picks a column piece drops and then alternatePlayer
//

// // var isValidMove =
// // if ($(pickColumn).hasClass('filled')) {
// // if there is a space filled
// // div:last-1 }
// row (makes validMove)


// var endGame =
//
// var winningMove =
//
// var gameOver =
//
// var playersWin =
//
// var victoryMessage =
// // atVictoryMessage (Player Wins!)
// // alert (play again?)
