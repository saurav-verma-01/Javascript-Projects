// 1. Select all Elements
const form = document.querySelector(".form");
const todoInput = document.querySelector("#todo");
const list = document.querySelector(".todo-list");
// 2. Add Event listener to the form Submission

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // A. Select the Input Todo Value
  const inputVal = todoInput.value;

  // B. Create a new ListItem with the text Input Value
  const listItem = document.createElement("li");
  listItem.innerText = inputVal;

  console.log(listItem);
  // C. Add Listitem to the List as Child
  list.appendChild(listItem);

  // D. Clear the Input Feild
  todoInput.value = "";

  // E. Add Eventlistener on Listitem to remove the item when clicked
  listItem.addEventListener("click", () => {
    listItem.remove();
  });
});
