$(document).ready(function() {
    console.log('ready!');
});

var board = {
    row1: [null, null, null, null, null, null, null],
    row2: [null, null, null, null, null, null, null],
    row3: [null, null, null, null, null, null, null],
    row4: [null, null, null, null, null, null, null],
    row5: [null, null, null, null, null, null, null],
    row6: [null, null, null, null, null, null, null],
}

var startGame =
    $(".start").click(function() {
        // gamePiece shows red on startGame
        $('#gamePiece').addClass('redPlayer');
        console.log("starting!");
    });

var column = $('div.columns').click(function() {
    // readColumn($(this));
    // fillingSpace();
    // alternatePlayer();
var clickedColumn = this;
var rowsInColumn = this.children;
// var rows = column[0].children;
for (var i = 0; i < rowsInColumn.length; i++) {
  switch ($(rowsInColumn[i])) {
    case !$(rowsInColumn[i]).attr('background-color, yellow'):
      $(rowsInColumn[i]).addClass('yellowPlayer');
      break;
    default: console.log('read');

  }

      }
}
};
// var fillingSpace = function() {
//     // var gamePiece = $('#gamePiece');
//     if ($('#gamePiece').hasClass('yellowPlayer')) {
//         rows[i].css('background-color', 'yellow');
//         console.log('yellow');
//     } else if ($('#gamePiece').hasClass('redPlayer')) {
//         {
//             rows[i].css('background-color', 'red');
//             console.log('red');
//         }
//     }
// };

// var readColumn = function(column) {
    // var rows = column[0].children;
    // for (var i = 0; i < rows.length; i++) {
    //     if (!rows[i].classList.contains('yellowPlayer') || !rows[i].css("background-color", "red")) {
    //         console.log($(rows[i]));
    //         break;
        // }
    // }
// };
//
// // when player picks a column the lowest column has id filled with player then alternatePlayer
// var alternatePlayer = function() {
//     $('.redPlayer').toggleClass('yellowPlayer');
//     console.log('Player Switched!');
// };


// var checkForWin
// div.dataset.row (checks whats in the space)

// var winningMessage

// var resetGame
