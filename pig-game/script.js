"use strict";

// Select DOM Element for the score
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");

const btnRollDice = document.querySelector(".btn--roll");
const btnNewGame = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playingGame = true;

// Inital state for the score of each player
score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add("hidden");

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--active");
  activePlayer = activePlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add("player--active");
  currentScore = 0;
};

//Rolling Dice functionality
btnRollDice.addEventListener("click", function () {
  if (playingGame) {
    //1. generating random number
    const randomNumber = Math.trunc(Math.random() * 6) + 1;
    //2. display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${randomNumber}.png`;
    //3. Check if 1 was  rolled
    if (randomNumber !== 1) {
      // add random number to current score
      currentScore += randomNumber;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      //if true switch to next player
      switchPlayer();
    }
  }
});

//Hold btn  functionality
btnHold.addEventListener("click", function () {
  if (playingGame) {
    //1. first add current score to active player score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. check if the score is at least 100
    if (scores[activePlayer] >= 20) {
      // finish the game
      playingGame = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});
