//create table
const $table = document.createElement("table");
for (let i = 0; i < 3; i++) {
  const $tr = document.createElement("tr");
  for (let i = 0; i < 3; i++) {
    const $td = document.createElement("td");
    $tr.append($td);
  }
  $table.append($tr);
}
document.body.append($table);

let turn = "O";
$table.addEventListener("click", (e) => {
  if (e.target.textContent) return;
  e.target.textContent = turn;
  turn === "O" ? (turn = "X") : (turn = "O");
});
