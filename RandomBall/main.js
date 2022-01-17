const $btn = document.querySelector("#btn");
const $showRandomBall = document.querySelector("#showRandomBall");

const saveBall = [];
saveBall.length = 45;
const saveBallStore = saveBall.fill(0).map((item, idx) => idx + 1);

const index = Math.floor(Math.random() * 45 + 1);

const randomBall = [];
randomBall.length = 6;
const randomBallStore = randomBall
  .fill(0)
  .map((item, idx) => idx + saveBallStore[index]);

$btn.addEventListener("click", () => {
  $showRandomBall.textContent = `${randomBallStore}`;
  console.log(`${randomBallStore}`);
});
