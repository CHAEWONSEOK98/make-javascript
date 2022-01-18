const $btn = document.querySelector("#btn");
const $showRandomBall = document.querySelector("#showRandomBall");

function getRandomNumber() {
  const saveBall = [];
  saveBall.length = 45;
  const saveBallStore = saveBall.fill(0).map((item, idx) => idx + 1);

  let randomBall = [];

  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * 45); //0~44
    randomBall.push(saveBallStore[index]);
    saveBallStore.splice(index, 1);
  }

  $showRandomBall.textContent = `${randomBall}`;
}

$btn.addEventListener("click", () => {
  getRandomNumber();
});
