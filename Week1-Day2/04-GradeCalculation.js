//Write a JavaScript function that evaluates a student's score
// and returns their grade using a switch statement to assess score ranges.

function gradeCalculation(Score) {
  switch (true) {
    case Score > 90:
      console.log("Grade A");
      break;
    case Score > 80:
      console.log("Grade B");
      break;
    case Score > 70:
      console.log("Grade C");
      break;
    case Score > 60:
      console.log("Grade D");
      break;
    default:
      console.log("Need to Improve");
      break;
  }
}
gradeCalculation(75);
gradeCalculation(45);
