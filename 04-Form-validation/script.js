// TODO: Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element

const formEl = document.getElementById("form");
// **********************************
const usernameEl = document.getElementById("username");
const passwordEl = document.getElementById("password");
const passwordConfirmationEl = document.getElementById("password-confirmation");
const termsEl = document.getElementById("terms");

// **********************************
const errorList = document.querySelector(".errors-list");
const errorDiv = document.querySelector(".errors");

// TODO: Create an event listener for when the form is submitted and do the following inside of it.

let detectedErrors = [];

formEl.addEventListener("submit", (e) => {
  //    TODO: Create an array to store all error messages and clear any old error messages
  detectedErrors = [];
  clearErrors();

  console.log("Form is submitted");
  checkErrors();
  console.log("checked for errors");
  showErrors(detectedErrors);
  console.log("Errors Showed on Error List");
  console.log("Show the error div");
  if (detectedErrors.length > 0) {
    errorDiv.classList.add("show");
    e.preventDefault();
  }

  //    TODO: If there are any errors then prevent the form from submitting and show the error messages

  // if (detectedErrors.length === 0) {
  //   // hide the error div
  //   errorDiv.classList.remove("show");
  //   window.location.href = "./thank-you.html";
  // }
});

function checkErrors() {
  //    TODO: Define the following validation checks with appropriate error messages

  //      1. Ensure the username is at least 6 characters long
  if (usernameEl.value.length < 6) {
    detectedErrors.push(
      "Make Sure the username is at least 6 characters long!!"
    );
  }

  //      2. Ensure the password is at least 10 characters long
  if (passwordEl.value.length < 10) {
    detectedErrors.push(
      "Make Sure the password is at least 10 characters long!!"
    );
  }

  //      3. Ensure the password and confirmation password match

  if (passwordEl.value !== passwordConfirmationEl.value) {
    detectedErrors.push(
      "Ensure the password and confirmation password match!!"
    );
  }

  //      4. Ensure the terms checkbox is checked
  if (!termsEl.checked) {
    detectedErrors.push("Ensure the terms checkbox is checked!!");
  }
}

// TODO: Define this function
function clearErrors() {
  // Loop through all the children of the error-list element and remove them
  // IMPORTANT: This cannot be done with a forEach loop or a normal for loop since as you remove children it will modify the list you are looping over which will not work
  // I recommend using a while loop to accomplish this task
  // This is the trickiest part of this exercise so if you get stuck and are unable to progress you can also set the innerHTML property of the error-list to an empty string and that will also clear the children. I recommend trying to accomplish this with a while loop, though, for practice.
  // Also, make sure you remove the show class to the errors container
  while (errorList.firstChild) {
    errorList.firstChild.remove();
  }
  errorDiv.classList.remove("show");
}

// TODO: Define this function
function showErrors(errorMessages) {
  // Add each error to the error-list element
  // Make sure to use an li as the element for each error
  // Also, make sure you add the show class to the errors container

  errorMessages.forEach((error) => {
    const errorListItem = document.createElement("li");
    errorListItem.innerText = error;
    errorList.appendChild(errorListItem);
  });
}

const clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", clearErrors);
