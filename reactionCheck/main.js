"use strict";

const $screen = document.querySelector("#screen");
const $result = document.querySelector("#result");
const $list = document.querySelector("#list");

let startTime;
let endTime;
let timeoutId;
let records = [];

$screen.addEventListener("click", (e) => {
  if ($screen.classList.contains("waiting")) {
    $screen.classList.remove("waiting");
    $screen.classList.add("ready");
    $screen.textContent = `초록색이되면 클릭!`;
    timeoutId = setTimeout(() => {
      startTime = new Date();
      $screen.classList.remove("ready");
      $screen.classList.add("now");
      $screen.textContent = `클릭!`;
    }, Math.floor(Math.random() * 1000) + 2000);
  } else if ($screen.classList.contains("ready")) {
    clearTimeout(timeoutId);
    $screen.classList.remove("ready");
    $screen.classList.add("waiting");
    $screen.textContent = `아직이에요!`;
  } else if ($screen.classList.contains("now")) {
    endTime = new Date();
    const current = endTime - startTime;
    records.push(current);
    const average = records.reduce((a, c) => a + c) / records.length;
    $result.textContent = `현재 ${current}ms, 평균${average}ms`;

    const topFive = records.sort((a, b) => a - b).slice(0, 5);
    topFive.forEach((top, index) => {
      $result.append(
        document.createElement("br"),
        document.createElement("br"),
        `${index + 1}위: ${top}ms`
      );
    });
    console.log(topFive);
    console.log(records);
    startTime = null;
    endTime = null;
    $screen.classList.remove("now");
    $screen.classList.add("waiting");
    $screen.textContent = "클릭해서 시작!";
  }
});
