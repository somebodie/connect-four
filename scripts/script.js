$(document).ready(function() {
    console.log('ready!');
})

var startGame =
  $( ".start" ).click(function() {
// gamePiece shows red on startGame
    $('#gamePiece').addClass('redPlayer');
    console.log("starting!");
  });

// var selectLevel =
// to hold options for selections and paramaters
  // when player clicks makes a selection button diffucutlty changes
// $('level').val()
//   switch($(val()) {
//     case pvp:
//         $('#gamePiece').addClass('redPlayer');
//        alternatePlayer;
//         break;
//     case easy:
//        $('column')Math.Random(div:column);
//         break;
//     case hard:
//         code block
//         break;
//     default:
//         console.log('selection made')
// }      // IDEA: maybe in advance allow to pick color


// var selections = // moves piece left to right

var currentPlayer = {
                r : 'redPlayer',
                y : 'yellowPlayer'};

var alternatePlayer =
 // switch from redPlayer to yellowPlayer
 $('pickColumn').click(function(){
     $('.redPlayer').toggleClass('yellowPlayer');
 });

// var makeMove =

// var pickColumn =
// // this allows the player to select space
//   $("column").click(function(){
//       $("div:last").addClass("curr entPlayer['r']");
// need to figure out how to switch index back and forth
// .each(currentPlayer)
//       alternatePlayer;
//   });

// var drop = animation }// when a player picks a column piece drops and then alternatePlayer

// var isValidMove =
// if ($(pickColumn).hasClass('filled')) {
// if there is a space filled
// div:last-1 }
