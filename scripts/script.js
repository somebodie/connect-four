$(document).ready(function() {
    console.log('ready!');
})

var startGame =
    $(".start").click(function() {
        // gamePiece shows red on startGame
        $('#gamePiece').addClass('redPlayer');
        console.log("starting!");
    });

var columnPicked = $(this.columns)

var pickSpace =



// when player picks a column the lowest column has id filled with player then alternatePlayer
var alternatePlayer = function() {
    $('.redPlayer').toggleClass('yellowPlayer');
    console.log('Player Switched!');
};


// validMove

// var checkForWin
// div.dataset.row (checks whats in the space)

// var winningMessage

// var resetGame
