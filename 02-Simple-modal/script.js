/*
  TODO: 2. Select the elements with the following IDs
    * modal
    * open-modal-btn
    * close-modal-btn
    * BONUS: overlay
*/

const modalEl = document.getElementById("modal");
const openBtn = document.getElementById("open-modal-btn");
const overlayEl = document.getElementById("overlay");

const closeBtn = document.getElementById("close-modal-btn");

// TODO: 3. Create a click event listener for the open-modal-btn that adds the class "open" to the modal
// BONUS: Also add the class "open" to the overlay

openBtn.addEventListener("click", () => {
  modalEl.classList.add("open");
  overlayEl.classList.add("open");
});

// TODO: 4. Create a click event listener for the close-modal-btn that removes the class "open" from the modal
// BONUS: Also remove the class "open" from the overlay

closeBtn.addEventListener("click", () => {
  modalEl.classList.remove("open");
  overlayEl.classList.remove("open");
});

// BONUS: Add a click event listener to the overlay that removes the class "open" from the modal and the overlay

overlayEl.addEventListener("click", () => {
  modalEl.classList.remove("open");
  overlayEl.classList.remove("open");
});
