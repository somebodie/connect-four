$(document).ready(function() {
    console.log('ready!');
})

var currentPlayer = {
                r : 'redPlayer',
                y : 'yellowPlayer'};

// var selectLevel = $('level').val()

//  var diffucutlty =
// when player clicks makes a selection button diffucutlty changes
//   switch($(val()) {
//     case pvp:
//         $('#gamePiece').addClass('redPlayer');
//        alternatePlayer;
//         break;
//     case easy:
//        $('column')Math.Random(div:column);
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


// var coinMove = // moves piece left to right

var pickColumn =
  switch ($('column').click() {
  case $('#gamePiece').hasClass('redPlayer'):
    $('div:last').addClass('redPlayer')
    break;
  case $('#gamePiece').hasClass('yellowPlayer'):
      $('div:last').addClass('yellowPlayer')
    break;
  default: alert('did you pick something on the board?');
}

var alternatePlayer =
 // switch from redPlayer to yellowPlayer
 $('pickColumn').click(function(){
     $('.redPlayer').toggleClass('yellowPlayer');
 });

// var switch = $('pickColumn').alternatePlayer

// var drop = animation }// when a player picks a column piece drops and then alternatePlayer

// var isValidMove =
// if ($(pickColumn).hasClass('filled')) {
// if there is a space filled
// div:last-1 }
// or
// var filled = make sure row cannot be filled 
// or
// var isValidMove = function(event) {
//     // IDEA: case switch //   case expression:
//     //
//     //     break;
//     // IDEA: reads rows to stop moves .hasClass
// }

var endGame =

var winningMove =

var gameOver =

var playersWin =

var victoryMessage =
// atVictoryMessage (Player Wins!)
// alert (play again?)
