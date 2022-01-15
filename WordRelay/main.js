"use strict";

const container = document.querySelector("#container");
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");

const arr = new Array();

const ul = document.createElement("ul");
container.appendChild(ul);

window.addEventListener("load", () => {
  input.focus();
});

btn.addEventListener("click", (event) => {
  arr[0] === undefined ? (arr[0] = input.value) : (arr[1] = input.value);
  if (parseInt(input.value.length) > 3) {
    preventDefault();
  }
  const brr0 = arr[0].split("");
  const li = document.createElement("li");
  if (arr[1] === undefined) {
    li.innerText = `${arr[0]}`;
    ul.appendChild(li);
    input.value = "";
  } else {
    const brr1 = arr[1].split("");
    if (brr0[brr0.length - 1] === brr1[0]) {
      li.innerText = `${arr[1]}`;
      ul.appendChild(li);
      input.value = "";
      arr[0] = arr[1];
      ul.removeChild(ul.firstChild);
    } else {
      li.innerText = `땡!`;
      ul.appendChild(li);
      input.value = "";
    }
  }
});

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
}
