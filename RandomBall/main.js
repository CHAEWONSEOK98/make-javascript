const $btn = document.querySelector("#btn");
const $showRandomBall = document.querySelector("#showRandomBall");
const $option = document.querySelector("#option");

const candidate = Array(45)
  .fill()
  .map((i, idx) => idx + 1);
const shuffle = [];

while (candidate.length > 0) {
  const random = Math.floor(Math.random() * candidate.length);
  const spliceArray = candidate.splice(random, 1);
  const value = spliceArray[0];
  shuffle.push(value);
}

const getNumbers = shuffle.slice(0, 6).sort((a, b) => a - b);
const lastNumber = shuffle[6];

function colorize(number, tag) {
  if (number <= 10) {
    tag.style.color = "yellow";
  } else if (number <= 20) {
    tag.style.color = "green";
  } else if (number <= 30) {
    tag.style.color = "blue";
  } else if (number <= 40) {
    tag.style.color = "purple";
  } else {
    tag.style.color = "orange";
  }
}

const showRandomBall = (number, $parent) => {
  const ball = document.createElement("div");
  ball.className = "ball";
  colorize(number, ball);
  ball.textContent = number;
  $showRandomBall.appendChild(ball);
};

for (let i = 0; i < getNumbers.length; i++) {
  setTimeout(() => {
    showRandomBall(getNumbers[i], $showRandomBall);
  }, (i + 1) * 1000);
}

setTimeout(() => {
  const optionBall = document.createElement("div");
  optionBall.className = "ball";
  optionBall.textContent = lastNumber;
  colorize(lastNumber, optionBall);
  $option.appendChild(optionBall);
}, 7000);

/*
function getRandomNumber() {
  const saveBall = [];
  saveBall.length = 45;
  const saveBallStore = saveBall.fill(0).map((item, idx) => idx + 1);

  let randomBall = [];

  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * (45 - i));
    randomBall.push(saveBallStore[index]);
    saveBallStore.splice(index, 1);
    console.log(randomBall);
  }

  $showRandomBall.textContent = `${randomBall}`;
  console.log(saveBall);
}
*/
