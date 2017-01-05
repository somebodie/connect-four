$(document).ready(function() {
    console.log('ready!');
})

var player = {
    red: 'redPlayer',
    yellow: 'yellowPlayer'
};

var board = {
row1: [1, 2, 3, 4, 5, 6, 7],
row2: [1, 2, 3, 4, 5, 6, 7],
row3: [1, 2, 3, 4, 5, 6, 7],
row4: [1, 2, 3, 4, 5, 6, 7],
row5: [1, 2, 3, 4, 5, 6, 7],
row6: [1, 2, 3, 4, 5, 6, 7],
  }

var startGame =
    $(".start").click(function() {
        // gamePiece shows red on startGame
        $('#gamePiece').addClass('redPlayer');
        console.log("starting!");
    });

// var pickASpace =
  // player allowed to pick space

// var pieceDrops =
  // animation of piece moving to space

// var moveMade =
  // column space changes from white to color

// when player picks a column the lowest column has id filled with player then alternatePlayer
    // var alternatePlayer =
    //     // switch from redPlayer to yellowPlayer
    //     $('').click(function() {
    //         $('.redPlayer').toggleClass('yellowPlayer');
    //     });

// var checkForWin

// var winningMessage

// var resetGame 
