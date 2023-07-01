let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let correctAnswers = 0;

function nextSequence() {
  level++;
  $("h1").html(level);
  let randomNumber = Math.round(Math.random() * 3);
  let randomChosenColour = buttonColours[randomNumber];
  let toFlash = $("#" + randomChosenColour);
  toFlash.fadeOut(50).fadeIn(50);
  gamePattern.push(randomChosenColour);
  playSound(randomChosenColour);
}

function playSound(name) {
  let audio = new Audio(
    "Reference Files/Simon Game Challenge Starting Files/sounds/" +
      name +
      ".mp3"
  );
  audio.play();
}

function animatePress(currentColour) {
  let currentButton = $("#" + currentColour);
  currentButton.addClass("pressed");
  setTimeout(function () {
    currentButton.removeClass("pressed");
  }, 100);
}

function startOver() {
  level = 0;
  gamePattern = [];
  correctAnswers = 0;
  userClickedPattern = [];
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
    console.log("yes");
    correctAnswers++;
  } else {
    console.log("wrong");
    let audio = new Audio(
      "Reference Files/Simon Game Challenge Starting Files/sounds/wrong.mp3"
    );
    audio.play();
    let status = $("body");
    status.addClass("game-over");
    setTimeout(function () {
      status.removeClass("game-over");
    }, 200);
    $("h1").html("Game Over, Press Any Key to Restart");
    startOver();
  }
}

$(".btn").click(function (event) {
  let userChosenColour = event.target.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(correctAnswers);
  if (gamePattern.length == userClickedPattern.length) {
    userClickedPattern = [];
    correctAnswers = 0;
    setTimeout(function () {
      nextSequence();
    }, 1000);
  }
});

$("html").keydown(function () {
  if (level == 0) {
    nextSequence();
  }
});
