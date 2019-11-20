//The player input the max limit for the random number start from zero.

let randomNumber;
let upperLimit = document.getElementById("maxGuess");
function onMaxLimitClicked() {
  let maxNumber = parseInt(upperLimit.value);
  //console.log(maxNumber);

  //The system choose a random number to be guessed by the player
  randomNumber = Math.random();
  randomNumber = Math.floor(Math.random() * maxNumber + 1);
  //console.log(randomNumber);

  let setLimit = document.getElementById("setLimit");
  setLimit.textContent =
    "The limit of the secret number is between 0 and " + maxNumber + ".";

  document.getElementById("guessLimit").style.display = "none";
}

// checking for the right guesses and counting the number of trials prior to the right guess
let NumberOfGuess = 0;
let inputNumber = [];
let wrongGuess;
function onGuessClicked() {
  let numberGuess = document.getElementById("guessNumber");
  let guess = parseInt(numberGuess.value);
  NumberOfGuess++;

  //pushing wrong guesses into an array to be displayed later
  wrongGuess = guess !== randomNumber;
  if (wrongGuess) {
    inputNumber.push(numberGuess.value);
  }

  let verditDiv = document.getElementById("result");
  verditDiv.value = "";

  //confirming the right guess and alerting / dispalying the congratulatory messages 
  let rightGuess = guess === randomNumber;

  if (rightGuess) {

    alert("Right number was guessed after " + NumberOfGuess + " trials.");
    alert("The following wrong guess were made " + inputNumber);

    verditDiv.textContent = "Congrats! " + guess + " was the right guess.";
    verditDiv.textContent += " This was guessed after " + NumberOfGuess + " trials.";
    //refreshing the page after 5 seconds
    setTimeout("location.reload();", 5000);

    //giving some tips to the player
  } else if (guess > randomNumber) {
    verditDiv.textContent = "The number is smaller than  " + guess;
  } else {
    verditDiv.textContent = "The number is bigger than  " + guess;
  }


}
