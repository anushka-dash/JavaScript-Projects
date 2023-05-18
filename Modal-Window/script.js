"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnclose = document.querySelector(".close-modal");
const btnopen = document.querySelectorAll(".show-modal");

const openmodal = function () {
  console.log("button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closemodal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnopen.length; i++)
  btnopen[i].addEventListener("click", openmodal);

btnclose.addEventListener("click", closemodal);

document.addEventListener("keydown", function (event) {
  if (event.key == "Escape" && !modal.classList.contains("hidden")) {
    closemodal();
  }
});
