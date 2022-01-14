const container = document.querySelector("#container");
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");

const arr = new Array();

btn.addEventListener("click", (event) => {
  arr[0] === undefined ? (arr[0] = input.value) : (arr[1] = input.value);
  const brr0 = arr[0].split("");
  const p1 = document.createElement("p");
  if (arr[1] === undefined) {
    p1.innerText = `${arr[0]}`;
    container.appendChild(p1);
    input.value = "";
  } else {
    const brr1 = arr[1].split("");
    if (brr0[brr0.length - 1] === brr1[0]) {
      p1.innerText = `${arr[1]}`;
      container.appendChild(p1);
      input.value = "";
      arr[0] = arr[1];
    } else {
      p1.innerText = `땡!`;
      container.appendChild(p1);
    }
  }
});

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
}
