//
// var yellow : [21 spaces]
// var red: [21 spaces]
//
//
//
// playersWin(function(event)) {
//
// }
//
// validMove(event){
//   case expression:
//
//     break;
// }
//
// winningMove(){
//
// }
//
// atVictoryMessage (Player Wins!)
// alert (play again?)
//
// AI(easy : hard) {
//   Easy - Random
//   Hard - Tries to stop win;
// }
//
// column (makes move)
// row (makes validMove)

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
