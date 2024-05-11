const todoList = document.querySelector(".todo-list");

const itemForm = document.querySelector(".form");
const item = document.getElementById("todo");

itemForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newItem = item.value;

  const newListItem = document.createElement("li");
  newListItem.appendChild(document.createTextNode(newItem));
  todoList.appendChild(newListItem);
  item.value = "";
});
