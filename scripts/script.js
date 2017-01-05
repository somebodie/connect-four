$(document).ready(function() {
    console.log('ready!');
})

var player = {
    one: 'redPlayer',
    two: 'yellowPlayer'
};

var board = {
row6: [1, 2, 3, 4, 5, 6, 7],
row5: [1, 2, 3, 4, 5, 6, 7],
row4: [1, 2, 3, 4, 5, 6, 7],
row3: [1, 2, 3, 4, 5, 6, 7],
row2: [1, 2, 3, 4, 5, 6, 7],
row1: [1, 2, 3, 4, 5, 6, 7],
  }

var startGame =
    $(".start").click(function() {
        // gamePiece shows red on startGame
        $('#gamePiece').addClass('redPlayer');
        console.log("starting!");
    });

var mouseMoves

    // var alternatePlayer =
    //     // switch from redPlayer to yellowPlayer
    //     $('').click(function() {
    //         $('.redPlayer').toggleClass('yellowPlayer');
    //     });
