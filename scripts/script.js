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

var pickSpace =
    $('div.columns').click(function() {
        fill();
        console.log("move made!");
    });

var fill = function() {
    if ($('gamePiece').hasClass('yellowPlayer')) {
        $().removeClass('empty').addClass('yellowPlayer');
        alternatePlayer();
    } else if ($('gamePiece').hasClass('redPlayer')) {
        $().removeClass('empty').addClass('redPlayer row');
        alternatePlayer();
    }
};


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
