//Write a JavaScript function named `printOddNumbers` that prints
// odd numbers between 1 and 25

function printOddNumbers() {
  for (let i = 1; i <= 25; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}
printOddNumbers();
