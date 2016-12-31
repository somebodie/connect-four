$(document).ready(function() {
  console.log( 'ready!');
})

var redPlayer = [];
// [21 spaces]
var blackPlayer = [];
// [21 spaces]

// IDEA: var [][] board = { };

var resetGame =

var gameOver =

var startGame = function() {
  // IDEA: $('startButton').hide() new game and rest.show() rest button
}

var onStart = function() {

}

var onClick = function() {

}

var coinDrop = function() {
  // manipulate css to drop piece .style
  // IDEA:
  // drawProgressBars: function(timerValue){
  // //// MVP
  // var timeElapsed = 100 - timerValue;
  // document.getElementsByClassName('progress-bar')[0].style.width = timeElapsed + '%';
  // //// REACH
  // // var progress = 100 - timerValue;
  // // var bars = document.getElementsByClassName('progress-bar');
  // // for (var i = 0; i < bars.length; i++) {
  // //   bars[i].style.width = progress + '%';
  // // }
}
// source progress bar sample to make piece move
// gamePiece.style.postion.top (or bottom and negative)+(howmanyitneeds to fall in place)

}

var currentPlayer = function(event) {

}

var takesTheBoard = function(event) {
// alternate players .toggleclass
}

var isValidMove = function(event) {
// IDEA: case switch //   case expression:
//
//     break;
// IDEA: reads rows to stop moves .hasClass
}

if (gamOver)

var onClickBoardSpace = function(event) {
  if (isValidMove) {
    return currentPlayer.takesTheBoard
  }
}
// IDEA: make move reads column or appends  .hasClass

var makeMove = function() {
// IDEA: $('.div this').html(makeMove[activePlayer]);
}

var onClickNewGame = function(event) {
  return resetGame
}

var winningMove = function(event) {

}

var playersWin = function() {

}

var victoryMessage = function() {
  // atVictoryMessage (Player Wins!)
  // alert (play again?)
}

// Possible AI
var easy = function() {
//  - Random
}

var hard = function() {
//   - Tries to stop win;
}
