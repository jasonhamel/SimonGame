let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
function nextSequence() {
  let randomNumber = Math.round(Math.random() * 3);
  return randomNumber;
}

let randomChosenColour = buttonColours[nextSequence()];

let toFlash = $("#" + randomChosenColour);
let audio = new Audio(
  "Reference Files/Simon Game Challenge Starting Files/sounds/" +
    randomChosenColour +
    ".mp3"
);
toFlash.fadeOut(50).fadeIn(50);
audio.play();
