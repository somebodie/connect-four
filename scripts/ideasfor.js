

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

// The size of the table.
var entireBoard = 42;
// Loop counters.
var i, j;

// Set the length of the array to entireBoard + 1.
// The first array index is zero, not 1.
var connect4Board = new Array(entireBoard + 1);

// Loop for each major number (each row in the table)
for (i = 1; i <= entireBoard; i++)
{
    // Create the columns in the table
    connect4Board[i] = new Array(entireBoard + 1);

    // Fill the row with the results of the multiplication
    for (j = 1; j <= entireBoard; j++)
    {
        connect4Board[i][j] = i * j;
    }
}

array.push($('input').val())




 var endGame =

 var winningMove =

 var gameOver = if...else..

 var playersWin =

 var victoryMessage =
 atVictoryMessage (Player Wins!)
 alert (play again?)

 var coinMove = // moves piece left to right
 column (makes move)

 var yellow: [];//21 spaces

 var red: []; //21 spaces

 var bothPlayers = [yellow][red]
 // IDEA: answers.push($('input').val())


 // read entire board
 for (int i = 0; i < cols; i++) {
   for (int j = 0; j < rows; j++) {
     myArray[i][j] = 0;
   }
 }

 var entireBoard = [];

 var cols = 21;
 var rows = 21;

 // Read entire board
 var readBoard =
     for (i = 0; i < cols; i++) {
         for (j = 0; j < rows; j++) {
             myArray[i][j] = 0;
             entireBoard.push(myArray[i][j]);
         }
     }
