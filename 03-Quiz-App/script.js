/*
  TODO: 2. Select all elements needed
    * The form element (has the id `quiz-form`)
    * The answer inputs (have the class `answer`)
    * BONUS: The questions (have the class `question-item`)
    * BONUS: The alert (has the id `alert`)
*/

const formEl = document.getElementById("quiz-form");
const answersList = document.querySelectorAll(".answer");
const questionItems = document.querySelectorAll(".question-item");
const alertEl = document.getElementById("alert");

// TODO: 3. Create a submit event listener for the form that does the following.
//    1. Prevent the default behaviour
//    2. Get all selected answers (use the `checked` property on the input to determine if it is selected or not)
//    3. Loop through the selected answer to see if they are correct or not (Check the value of the answer to see if it is the string "true")
//    4. For each correct answer add the class `correct` to the parent with the class `question-item` and remove the class `incorrect`.
//    5. For each incorrect answer add the class `incorrect` to the parent with the class `question-item` and remove the class `correct`.
//    6. BONUS: Make sure unanswered questions show up as incorrect. The easiest way to do this is to add the incorrect class and removing the correct class from all question items before checking the correct answers
//    7. BONUS: If all answers are correct show the element with the id `alert` and hide it after one second (look into setTimeout) (use the class active to show the alert and remove the class to hide it)

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("form is Submitted");
  //    2. Get all selected answers (use the `checked` property on the input to determine if it is selected or not)

  const answersArray = Array.from(answersList);
  const questionsArray = Array.from(questionItems);
  //    6. BONUS: Make sure unanswered questions show up as incorrect. The easiest way to do this is to add the incorrect class and removing the correct class from all question items before checking the correct answers
  questionsArray.forEach((question) => {
    question.classList.remove("correct");
    question.classList.add("incorrect");
  });
  // console.log(answersArray);

  // 3. Loop through the selected answer to see if they are correct or not (Check the value of the answer to see if it is the string "true")

  const selectedAnswers = answersArray.filter((answer) => answer.checked);
  selectedAnswers.forEach((answer, index) => {
    // 4. For each correct answer add the class `correct` to the parent with the class `question-item` and remove the class `incorrect`.
    const isCorrect = answer.value === "true";
    const questionItem = answer.closest(".question-item");
    if (isCorrect) {
      questionItem.classList.remove("incorrect");
      questionItem.classList.add("correct");
    } else {
      // 5. For each incorrect answer add the class `incorrect` to the parent with the class `question-item` and remove the class `correct`.
      questionItem.classList.remove("correct");
      questionItem.classList.add("incorrect");
    }
  });

  //    7. BONUS: If all answers are correct show the element with the id `alert` and hide it after one second (look into setTimeout) (use the class active to show the alert and remove the class to hide it)
  const allCorrectAnswers = selectedAnswers.filter(
    (answer) => answer.value === "true"
  );

  if (
    allCorrectAnswers.length === selectedAnswers.length &&
    allCorrectAnswers.length === questionItems.length
  ) {
    alertEl.classList.add("active");
    setTimeout(() => {
      alertEl.classList.remove("active");
    }, 2000);
  }
});
