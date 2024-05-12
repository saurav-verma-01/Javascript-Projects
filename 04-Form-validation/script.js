// TODO: Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element

// Selecting all Elements Needed
const formEl = document.getElementById("form");
const userNameEl = document.getElementById("username");
const passwordEl = document.getElementById("password");
const passwordConfirmationEl = document.getElementById("password-confirmation");
const termsEl = document.getElementById("terms");

const errorDiv = document.querySelector(".errors");
const errorList = document.querySelector(".errors-list");
// TODO: Create an event listener for when the form is submitted and do the following inside of it.

let errorArray = [];

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form Submitted");
  //    TODO: Create an array to store all error messages and clear any old error messages
  errorArray.splice(0, errorArray.length);
  //    TODO: Define the following validation checks with appropriate error messages

  //      1. Ensure the username is at least 6 characters long
  if (userNameEl.value.length < 6) {
    errorArray.push("Username must be atleast 6 characters long.");
  }
  //      2. Ensure the password is at least 10 characters long

  if (passwordEl.value.length < 10) {
    errorArray.push("Password must be atleast 10 characters long.");
  }
  //      3. Ensure the password and confirmation password match
  if (passwordConfirmationEl.value !== passwordEl.value) {
    errorArray.push("Password and Confirm Password should Match.");
  }
  //      4. Ensure the terms checkbox is checked
  if (!termsEl.checked) {
    errorArray.push("You must accept the terms.");
  }
  //    TODO: If there are any errors then prevent the form from submitting and show the error messages

  showErrors(errorArray);
  if (errorArray.length > 0) {
    errorDiv.classList.add("show");
  } else {
    errorDiv.classList.remove("show");
  }
});

// TODO: Define this function
function clearErrors() {
  // Loop through all the children of the error-list element and remove them
  // IMPORTANT: This cannot be done with a forEach loop or a normal for loop since as you remove children it will modify the list you are looping over which will not work
  // I recommend using a while loop to accomplish this task
  // This is the trickiest part of this exercise so if you get stuck and are unable to progress you can also set the innerHTML property of the error-list to an empty string and that will also clear the children. I recommend trying to accomplish this with a while loop, though, for practice.
  // Also, make sure you remove the show class to the errors container
}

// TODO: Define this function
function showErrors(errorMessages) {
  // Add each error to the error-list element
  errorMessages.forEach((error) => {
    // Make sure to use an li as the element for each error
    const errorListItem = document.createElement("li");
    errorListItem.innerText = error;
    errorDiv.appendChild(errorListItem);
    // Also, make sure you add the show class to the errors container
  });
}
