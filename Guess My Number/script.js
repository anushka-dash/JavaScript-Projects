"use strict";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").value = 23;

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //no guess
  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  }
  //guess not in range
  else if (guess > 20 || guess < 0) {
    document.querySelector(".message").textContent = "Number not in range!";
  }
  //correct guess
  else if (guess == secretnumber) {
    document.querySelector(".message").textContent = "CORRECT GUESS!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretnumber;
     
    if(score> highscore){
        highscore= score;
        document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    document.querySelector(".message").textContent = "Incorrect Guess";
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game :(";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
