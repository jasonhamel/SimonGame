let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
function nextSequence() {
  let randomNumber = Math.round(Math.random() * 3);
  return randomNumber;
}

let randomChosenColour = buttonColours[nextSequence()];
console.log(randomChosenColour);
