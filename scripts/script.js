$(document).ready(function() {
    console.log('ready!');
})

var startGame =
    $(".start").click(function() {
        // gamePiece shows red on startGame
        $('#gamePiece').addClass('redPlayer');
        console.log("starting!");
    });

var column = $('div.columns').click(function() {
    readColumn($(this));
});

var readColumn = function(column) {
 var rows = column[0].children;
 for (var i=0; i < rows.length; i++) {
   if (!rows[i].classList.contains('yellowPlayer') || !rows[i].classList.contains('redPlayer')) {
     console.log($(rows[i]));
     break;
   }
  }
 }

// var fillingSpace =
//  switch ($(rows[i])) {
//      case rows[i].classList.contains('yellowPlayer'):
//          console.log('yellowPlayer');
//          break;
//      case rows[i].classList.contains('redPlayer'):
//          console.log('redPlayer');
//          break;
//      default: console.log($(rows[i]));
//  }

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
