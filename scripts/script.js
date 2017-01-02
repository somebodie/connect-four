$(document).ready(function() {
    console.log('ready!');
})

var currentPlayer = {
    r: 'redPlayer',
    y: 'yellowPlayer'
};

var entireBoard = [];

var cols = 21;
var rows = 21;

// Read entire board
var readBoard =
    for (i = 0; i < cols; i++) {
        for (j = 0; j < rows; j++) {
            myArray[i][j] = 0;
            entireBoard.push(myArray);
        }
    }

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
    $(".start").click(function() {
        // gamePiece shows red on startGame
        $('#gamePiece').addClass('redPlayer');
        console.log("starting!");
    });

var pickSpace =
    switch (makeMove) {
        case $('#gamePiece').hasClass('redPlayer'):
            $('div:last').addClass('redPlayer')
            break;
        case $('#gamePiece').hasClass('yellowPlayer'):
            $('div:last').addClass('yellowPlayer')
            break;
        default:
            alert('did you pick something on the board?');
    }

var alternatePlayer =
    // switch from redPlayer to yellowPlayer
    $('pickColumn').click(function() {
        $('.redPlayer').toggleClass('yellowPlayer');
    });

var nextMove = pickSpace.alternatePlayer;
