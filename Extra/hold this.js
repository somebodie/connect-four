// gamePiece.style.postion.top (or bottom and negative) (howmanyitneeds to fall in place)

// IDEA: $('.div this').html(makeMove[activePlayer]);

// read entire board
for (i = 0; i < rows1; i++) {
    for (j = i + 1; j < rows2; j++) {
        myArray[i][j];
    }
}


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

var fill = function(column) {
//     // columnPicked.click(function() {
//     //     if (!$('rows').hasclass(filled)) {
//     //         $(rows).addclass(filled);
//     //         alteneratePlayer();
//
//     var getRow = column.
//             for (i = 0; rows.length; i++) {
//                 if ($('gamePiece').hasClass('yellowPlayer')) {
//                     $(row[i]).css('background-color', 'yellow');
//                     alternatePlayer();
//                     return console.log(yellow);
//                 } else if ($(gamePiece).hasClass('redPlayer')) {
//                     $(row[i]).css('background-color', 'red');
//                     alternatePlayer();
//                     return console.log(red);
//                 }
//             }
//         }
//     })
// };



$('div.columns').click(function() {
    fill($(this));
    console.log($(this));
});

if (!rows[i].classList.contains('yellowPlayer') || !rows[i].classList.contains('redPlayer')) {
  $(rows[i]).
  console.log($(rows[i]));
  break;
}

<<<<<<< HEAD
<<<<<<< HEAD
// var drop = animation }// when a player picks a column piece drops and then alternatePlayer

var isValidMove =
    if (pickSpace.hasClass('filled')) {
        if there is a space filled
        div: last - 1
    }
row(makes validMove)


var fillingSpace =
    if ($('gamePiece').hasClass('redPlayer')) {
        addID(player.red);
    } else
if ($('gamePiece').hasClass('yellowPlayer')) {
    column.this.addID(player.yellow);
} else alternatePlayer;


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
=======

=======

>>>>>>> parent of b34c874... managed function for aleternate player and picking a space need to work on filling the space
$('column').click(function() {
  console.log("that's your move?");
// pickSpace.alternatePlayer;
});


// switch (pickASpace) {
//     case $('#gamePiece').hasClass('redPlayer'):
//         $('column').addID('redPlayer');
//         alternatePlayer();
//         break;
//     case $('#gamePiece').hasClass('yellowPlayer'):
//         $('column').addID('yellowPlayer');
//         alternatePlayer();
//         break;
//     default:
//         alert('did you pick something on the board?');
// }
    var fillingSpace =
    if ($('gamePiece').hasClass('redPlayer')) {
        addID(player.red);
      } else if ($('gamePiece').hasClass('yellowPlayer')) {
        column.this.addID(player.yellow);
      } else alternatePlayer;

<<<<<<< HEAD
>>>>>>> parent of b34c874... managed function for aleternate player and picking a space need to work on filling the space
=======
>>>>>>> parent of b34c874... managed function for aleternate player and picking a space need to work on filling the space
