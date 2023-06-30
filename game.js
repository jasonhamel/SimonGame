let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

function nextSequence() {
  let randomNumber = Math.round(Math.random() * 3);
  let randomChosenColour = buttonColours[randomNumber];
  let toFlash = $("#" + randomChosenColour);
  toFlash.fadeOut(50).fadeIn(50);
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

nextSequence();

$(".btn").click(function (event) {
  let userChosenColour = event.target.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
});
