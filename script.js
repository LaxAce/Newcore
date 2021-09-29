"use strict";

const openNav = document.querySelector(".nav-icon");
const navModal = document.querySelector(".side-nav-container");
const cancelNav = document.querySelector(".cancel-icon");
const sideNav = document.querySelector(".side-nav");
const innerNav = document.querySelectorAll(".inner-nav");
const arrowDown = document.querySelectorAll(".arrow-down");
const arrowUp = document.querySelectorAll(".arrow-up");
const dropDown = document.querySelectorAll(".drop-down");
const toggleModal = function () {
  navModal.classList.toggle("hidden");
};

openNav.addEventListener("click", toggleModal);

navModal.addEventListener("click", toggleModal);

sideNav.addEventListener("click", toggleModal);

cancelNav.addEventListener("click", toggleModal);

for (let i = 0; i < innerNav.length; i++) {
  innerNav[i].addEventListener("click", toggleModal);
}

for (let i = 0; i < arrowDown.length; i++) {
  arrowDown[i].addEventListener("click", function () {
    console.log(i);
    document.querySelector(`.drop-down-${i}`).classList.remove("hidden");
    arrowDown[i].classList.toggle("hidden");
    arrowUp[i].classList.toggle("hidden");
  });

  arrowUp[i].addEventListener("click", function () {
    document.querySelector(`.drop-down-${i}`).classList.add("hidden");
    arrowUp[i].classList.toggle("hidden");
    arrowDown[i].classList.toggle("hidden");
  });
}
