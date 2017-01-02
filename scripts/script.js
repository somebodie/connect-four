$(document).ready(function() {
    console.log('ready!');
})

var players = {
    1: 'redPlayer'
    2: 'yellowPlayer'
};

var columns = []

var entireBoard = $('div.columns')

var startGame =
    $(".start").click(function() {
        // gamePiece shows red on startGame
        $('#gamePiece').addClass('redPlayer');
        console.log("starting!");
    });

var mouseMoves =

// var alternatePlayer =
//     // switch from redPlayer to yellowPlayer
//     $('').click(function() {
//         $('.redPlayer').toggleClass('yellowPlayer');
//     });
