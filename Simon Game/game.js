var buttonColors = ["red","blue","green","yellow"];
var gamepattern = [ ];
var userClickedpattern = [ ];

var level = 0;
var started = false;

$(".btn").click(function(){
  var userChosencolor = $(this).attr("id");
  userClickedpattern.push(userChosencolor);
  // console.log(userClickedpattern);
  makesound(userChosencolor);
  checkAnswer((userClickedpattern.length)-1);
})


$(document).keypress(function(){
  if(!started){
    nextSequence();
    started = true;
    $("#level-title").text("Level "+ level);
  }
})



function nextSequence(){

  userClickedpattern = [ ];
  level++;
  var rnum = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[rnum];
  gamepattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  makesound(randomChosenColor);
  $("#level-title").text("Level "+ level);


}



function makesound(color){

  // var audio = new Audio("sounds/" + color + ".mp3");
  // audio.play();
  switch (color) {
    case "red":
      var red = new Audio("sounds/red.mp3");
      red.play();
      break;
    case "blue":
      var blue = new Audio("sounds/blue.mp3");
      blue.play();
      break;
    case "green":
      var green = new Audio("sounds/green.mp3");
      green.play();
      break;
    case "yellow":
      var yellow = new Audio("sounds/yellow.mp3");
      yellow.play();
      break;
    default:console.log(key);
  }

}

function  animatePress(currentColor){
    $(currentColor).addClass('pressed');
    setTimeout(function() {
      $(currentColor).removeClass('pressed');
    }, 100);

}

function checkAnswer(currentLevel){
  if(userClickedpattern[currentLevel] == gamepattern[currentLevel]){
    //console.log("Succes");
    if(userClickedpattern.length == gamepattern.length){
      setTimeout(function(){
        nextSequence();
      },1000);
    }
  }
  else{
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("#level-title").text("Game over,press any key to restart");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    startOver();
  }
}

function startOver(){
  level = 0;
  gamepattern = [ ];
  started = false;
}
