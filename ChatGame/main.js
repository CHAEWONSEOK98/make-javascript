"use strict";

const GAME_DURATION_SEC = 7;

const randomText = document.querySelector("#randomText");

const input = document.querySelector("#chatting");

const gameTimer = document.querySelector("#timerNumber");
const gameScore = document.querySelector("#scoreNumber");

const gameBtn = document.querySelector("#gameBtn");

const chatBoard = document.querySelector("#chatBoard");

const words = [];

let score = 0;
let timer = undefined;

function getWords() {
  axios
    .get("https://random-word-api.herokuapp.com/word?number=100")
    .then(function (response) {
      // handle success
      response.data.forEach((word) => {
        if (word.length < 10) {
          words.push(word);
        }
      });
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

function start() {
  score = 0;
  gameScore.innerText = score;

  const text = input.value;
  if (text === "") {
    input.focus();
  }
  startBtnChange();
  startGameTimer();

  input.addEventListener("input", checkMatch);
}

function finish() {
  finishBtnChange();
  input.value = "";
  chatBoard.style.visibility = "hidden";
}

function checkMatch() {
  if (input.value.toLowerCase() === randomText.innerText.toLowerCase()) {
    clearInterval(timer);
    startGameTimer();
    showChatBoard();
    input.value = "";
    score++;
    gameScore.innerText = score;
    getWords();
    randomText.innerText = words[Math.floor(Math.random() * words.length)];
  }
}

function showChatBoard() {
  chatBoard.innerText = input.value;
  chatBoard.style.visibility = "visible";
  chatBoard.style.width = "auto";
}

function startGameTimer() {
  let remainingTimeSec = GAME_DURATION_SEC;
  updateTimerText(remainingTimeSec);
  timer = setInterval(() => {
    if (remainingTimeSec <= 0) {
      clearInterval(timer);
      finish();
      input.blur();
      return;
    }
    updateTimerText(--remainingTimeSec);
  }, 1000);
}

function updateTimerText(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  gameTimer.innerText = `${seconds}`;
}

function startBtnChange() {
  gameBtn.style.backgroundColor = "#ccc";
  gameBtn.innerText = "Ing";
  gameBtn.style.cursor = "not-allowed";
}

function finishBtnChange() {
  gameBtn.style.backgroundColor = "#3c5ba5";
  gameBtn.innerText = "Game Start";
  gameBtn.style.cursor = "pointer";
}

gameBtn.addEventListener("click", () => {
  getWords();
  start();
});
