$(document).ready(function() {
    console.log('ready!');
});

var startGame =
    $(".start").click(function() {
        // gamePiece shows red on startGame
        $('#gamePiece').addClass('redPlayer');
        console.log("starting!");
    });

var column = $('div.columns').click(function() {
    fillingSpace();
    alternatePlayer();
});

var fillingSpace = function() {
    if ($('#gamePiece').hasClass('yellowPlayer')) {
        .css('background-color', 'yellow');
        console.log('yellow');
    } else if ($('#gamePiece').hasClass('redPlayer')) {
        {
            .css('background-color', 'red');
            console.log('red');
        }
    }
};

var readColumn = function(column) {
    var rows = column[0].children;
    for (var i = 0; i < rows.length; i++) {
        if (!rows[i].classList.contains('yellowPlayer') || !rows[i].classList.contains('redPlayer')) {
            console.log($(rows[i]));
            break;
        }
    }
};

// when player picks a column the lowest column has id filled with player then alternatePlayer
var alternatePlayer = function() {
    $('.redPlayer').toggleClass('yellowPlayer');
    console.log('Player Switched!');
};


// var checkForWin
// div.dataset.row (checks whats in the space)

// var winningMessage

// var resetGame
