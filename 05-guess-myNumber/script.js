"use strict";

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayScore = function (score){
  document.querySelector(".score").textContent = score
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  
  // when there is not input
  if (!guess) {
    displayMessage("No Number ⛔!");

    // when the player wins
  } else if (guess === randomNumber) {
    displayMessage("Congrats you Win 😁!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = randomNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // when the player guess a different number
  } else if (guess !== randomNumber) {
    if (score > 1) {
     displayMessage (guess > randomNumber ? "Go down 📉 " : "Go up 📈");
      score--;
      displayScore(score);
    } else {
     displayMessage ("You lost the game 😭 ");
     displayScore(0);
   }
  }
});

//play again selector
document.querySelector(".again").addEventListener("click", function () {
  //location.reload()
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
   displayMessage ("Start guessing...");
   displayScore(score);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
