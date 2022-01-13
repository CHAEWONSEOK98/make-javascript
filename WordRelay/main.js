const container = document.querySelector("#container");
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");

const arr = new Array();

btn.addEventListener("click", (event) => {
  arr[0] = input.value;
  console.log(arr[0]);
});

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
}
