//create table
const $table = document.createElement("table");
const $result = document.createElement("div");
let turn = "O";
let rows = [];

for (let i = 0; i < 3; i++) {
  const $tr = document.createElement("tr");
  const cells = [];
  for (let j = 0; j < 3; j++) {
    const $td = document.createElement("td");
    $tr.append($td);
    cells.push($td);
  }
  rows.push(cells);
  $table.append($tr);
}
document.body.append($table);
document.body.append($result);

//Winner or loser
const checkWinner = (target) => {
  const rowIndex = target.parentNode.rowIndex;
  const cellIndex = target.cellIndex;

  // 세 칸 다 채워졌나?
  let hasWinner = false;
  // 가로줄 검사
  if (
    rows[rowIndex][0].textContent === turn &&
    rows[rowIndex][1].textContent === turn &&
    rows[rowIndex][2].textContent === turn
  ) {
    hasWinner = true;
  }
  // 세로줄 검사
  if (
    rows[0][cellIndex].textContent === turn &&
    rows[1][cellIndex].textContent === turn &&
    rows[2][cellIndex].textContent === turn
  ) {
    hasWinner = true;
  }
  // 대각선 검사
  if (
    rows[0][0].textContent === turn &&
    rows[1][1].textContent === turn &&
    rows[2][2].textContent === turn
  ) {
    hasWinner = true;
  }
  if (
    rows[0][2].textContent === turn &&
    rows[1][1].textContent === turn &&
    rows[2][0].textContent === turn
  ) {
    hasWinner = true;
  }
  return hasWinner;
};

const callback = (e) => {
  if (e.target.textContent) return;
  e.target.textContent = turn;

  // 승부 판단하기
  const hasWinner = checkWinner(e.target);
  if (hasWinner) {
    $result.textContent = `${turn}님이 승리!`;
    $table.removeEventListener("click", callback);
    return;
  }
  // 무승부 검사
  const draw = rows.flat().every((cell) => cell.textContent);
  if (draw) {
    $result.textContent = `무승부`;
    return;
  }

  turn = turn === "O" ? (turn = "X") : (turn = "O");
};

$table.addEventListener("click", callback);
