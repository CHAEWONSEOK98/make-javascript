const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  document.body.classList.toggle("change");
  btn.classList.toggle("btnBackgroundColor");
});
