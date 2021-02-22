"use strict";

/*document.querySelector(".message").textContent;

document.querySelector(".message").textContent = "Correct Number 😁!";

(document.querySelector(".number").textContent = 13),
(document.querySelector(".score").textContent = 10);

document.querySelector(".guess").value = 23;*/

const randomNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = randomNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No Number ⛔!";
  } else if (guess === randomNumber) {
    document.querySelector(".message").textContent = "Congrats you Win 😁!";
  } else if (guess > randomNumber) {
    document.querySelector(".message").textContent = "Go down 📉 ";
  } else if (guess < randomNumber) {
    document.querySelector(".message").textContent = "Go up 📈";
  }
});
