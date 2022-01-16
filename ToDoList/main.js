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
    const iconBox = document.createElement("div");
    iconBox.setAttribute("class", "iconBox");
    const listLine = document.createElement("div");
    listLine.setAttribute("class", "listLine");
    const addBtn = document.createElement("button");
    addBtn.setAttribute("class", "fas fa-pen addBtn");
    const removeBtn = document.createElement("button");
    removeBtn.setAttribute("class", "fas fa-trash removeBtn");
    iconBox.appendChild(addBtn);
    iconBox.appendChild(removeBtn);
    li.appendChild(toDo);
    li.appendChild(iconBox);
    li.appendChild(listLine);
    toDoViewList.appendChild(li);
    toDoInput.value = "";
  }
});
