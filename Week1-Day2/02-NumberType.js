//Learn to categorize a number as
// positive, negative, or zero using conditional statements in JavaScript.

function numberType(inputNumber) {
  if (inputNumber > 0) {
    console.log("It is a positive number");
  } else if (inputNumber < 0) {
    console.log("It is a negative number");
  } else {
    console.log("The number is neutral");
  }
}

let inputValue = 0;
numberType(inputValue);
