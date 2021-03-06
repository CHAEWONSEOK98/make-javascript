"use strict";

const toDoView = document.querySelector("#to-do-view");
const toDoInput = document.querySelector("#to-do-input");
const toDoViewList = document.querySelector("#to-do-view-list");

const toDoDone = document.querySelector("#to-do-done");
const toDoDoneList = document.querySelector("#to-do-done-list");

const line = document.querySelector(".line");

toDoInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter" && toDoInput.value === "") {
    event.preventDefault();
  } else if (event.key === "Enter" && toDoInput.value !== "") {
    const li = document.createElement("li");
    const toDo = document.createElement("span");
    toDo.setAttribute("class", "toDoText");
    toDo.textContent = toDoInput.value;
    const addBtn = document.createElement("button");
    addBtn.setAttribute("class", "fas fa-pen addBtn");
    addBtn.addEventListener("click", () => {
      const change = prompt("make your todo");
      toDo.textContent = change;
    });
    const removeBtn = document.createElement("button");
    removeBtn.setAttribute("class", "fas fa-trash removeBtn");
    const iconBox = document.createElement("div");
    iconBox.setAttribute("class", "iconBox");
    const listLine = document.createElement("div");
    listLine.setAttribute("class", "listLine");

    iconBox.appendChild(addBtn);
    iconBox.appendChild(removeBtn);
    li.appendChild(toDo);
    li.appendChild(iconBox);
    li.appendChild(listLine);
    toDoViewList.appendChild(li);

    removeBtn.addEventListener("click", () => {
      addBtn.remove();
      moveList(li, removeBtn);
      toDoViewList.removeChild(li);
    });
    toDoInput.value = "";
  }
});

function moveList(li, removeBtn) {
  toDoDoneList.appendChild(li);

  removeBtn.addEventListener("click", () => {
    toDoDoneList.removeChild(li);
  });
}
