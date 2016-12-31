$(document).ready(function() {
    console.log('ready!');
})

var startGame =
  $( ".start" ).click(function() {
// gamePiece shows red on startGame
    $('#gamePiece').addClass('redPlayer');
    console.log("starting!");
  });

// var selections = $('level').val()

// var selectLevel =
// to hold options for selections and paramaters
  // when player clicks makes a selection button diffucutlty changes
//   switch(selects) {
//     case pvp:
//         alternatePlayer;
//         break;
//     case easy:
//        $('column')Math.Random(div:column);
//         break;
//     case hard:
//         code block
//         break;
//     default:
//         console.log('selection made')
// }
      // IDEA: maybe in advance allow to pick color
  // });

// var alternatePlayer =
//  // switch from redPlayer to yellowPlayer
//  $(pickColumn).eventlistener(function(){
//      $('redPlayer').toggleClass('redPlayer''yellowPlayer');
//  });

// var pickColumn =
// $( "div.this" ).click(function() {
//    slideDown()
//    alternatePlayer;
// when a player picks a column piece drops and then alternatePlayer






// var makeMove = function() {
//   $("column").click(function(){
//       $("div:last").addClass("activePlayer");
      // alternatePlayer;
//   });
// }

// var isValidMove =
//   // if there is a next prompt
//   if (currentPrompt < prompts.length) {
// 	//put current prompt in all html elements with class
// 	$('.prompt').html(prompts[currentPrompt]);
// 	// move the next prompt into variable currentPrompt
// 	currentPrompt = currentPrompt + 1;
//   }
//   // or else if we're at the end of the array
//   else {
//     // put a new message into the html
//     $('.prompt').html("that's all for now!");
//     }
// }
