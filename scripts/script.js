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


var alternatePlayer =
 // switch from redPlayer to yellowPlayer
 $('pickColumn').click(function(){
     $('.redPlayer').toggleClass('yellowPlayer');
 });

var pickColumn =
// this allows the player to make move
  $("column").click(function(){
      $("div:last").addClass("activePlayer");
      alternatePlayer;
  });
}
// when a player picks a column piece drops and then alternatePlayer



//
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
