$(document).ready(function() {
    console.log('ready!');
})

var startGame =
    $(".start").click(function() {
        // gamePiece shows red on startGame
        $('#gamePiece').addClass('redPlayer');
        console.log("starting!");
    });

var pickSpace =
    $('div.columns').click(function() {
        fill();
        console.log($(this));
    });

var $('columnPicked') = $(this.columns)

var fill = function() {

for (i=rows.length; i<=0; i++) {
  if (!rows.hasClass('yellowPlayer')) {
    $(row[i]).css('background-color', 'yellow')
  }
}

//     if ($('gamePiece').hasClass('yellowPlayer')) {
//         $('div:last').css('background-color', 'yellow');
//         alternatePlayer();
//     } else if ($(gamePiece).hasClass('redPlayer')) {
//         $('div:last').css('background-color', 'red');
//         alternatePlayer();
//     }
// };

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
