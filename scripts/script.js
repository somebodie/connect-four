$(document).ready(function() {
    console.log('ready!');
})

// var selectLevel = function(value) {
//   // to hold options for selections and paramaters
//   pvp:
//   easy:
//   hard:
// }

var startGame =
  $( ".start" ).click(function() {
    console.log("starting!");
    // message can be placed that says log
  });

var onStartGame =
  // when player clicks start button red piece shows up
  $('.start').click(function(){
      $("div:last").addClass("redplayer");
  });
  // alternatePlayer;
   // IDEA: maybe in advance allow to pick color

// var alternatePlayer =
//     $('.redplayer').toggleClass('.yellowPlayer');

// var pickColumn = function(event) {}
// slideDown()
// when a player picks a column piece drops and then alternatePlayer

var makeMove = function() {
  // if there is a next prompt
  if (currentPrompt < prompts.length) {
	//put current prompt in all html elements with class
	$('.prompt').html(prompts[currentPrompt]);
	// move the next prompt into variable currentPrompt
	currentPrompt = currentPrompt + 1;
  }
  // or else if we're at the end of the array
  else {
    // put a new message into the html
    $('.prompt').html("that's all for now!");
    }
}
$("column").click(function(){
    $("div:last").addClass("activePlayer");
});
