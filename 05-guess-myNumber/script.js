"use strict";


let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // when there is not input
  if (!guess) {
    document.querySelector(".message").textContent = "No Number ⛔!";

    // when the player wins
  } else if (guess === randomNumber) {
    document.querySelector(".message").textContent = "Congrats you Win 😁!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = randomNumber;

    // when the guess is higher than the random numer
  } else if (guess > randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Go down 📉 ";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game 😭 ";
      document.querySelector(".score").textContent = 0;
    }

    // when the guess is smaller than the random numer
  } else if (guess < randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Go up 📈";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game 😭 ";
      document.querySelector(".score").textContent = 0;
    }
  }
});


//play again selector 
document.querySelector('.again').addEventListener('click', function (){
  //location.reload()
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = 'Start guessing...'
  document.querySelector(".score").textContent = score
  document.querySelector(".number").textContent = '?';
  document.querySelector(".guess").value = '';
  document.querySelector("body").style.backgroundColor = "#222"
  document.querySelector(".number").style.width = "15rem";
})