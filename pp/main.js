"use strict";

const hello = document.createElement("h2");
hello.innerText = `Hello!`;
const body = document.querySelector("body");
body.append(hello);

window.addEventListener("resize", () => {
  let width = window.innerWidth;
  if (width > 750) {
    body.classList.remove("skyblue");
    body.classList.remove("orange");
    body.classList.add("purple");
  } else if (width < 150 || width > 500) {
    body.classList.remove("purple");
    body.classList.remove("orange");
    body.classList.add("skyblue");
  } else {
    body.classList.remove("skyblue");
    body.classList.remove("purple");
    body.classList.add("orange");
  }
});
