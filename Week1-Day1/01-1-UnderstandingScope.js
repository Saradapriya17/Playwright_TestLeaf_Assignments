//Understand global scope, function scope, and block scope by using var and let inside
// conditional blocks.

let genderType = "male";
function printGender() {
  //let genderType = "female";
  let color = "brown";
  if (genderType === "female") {
    var age = 30;
    let color = "pink";
    console.log(`The color is ${color} in block level`);
  }
  console.log(`The color is ${color} in function level`);
  console.log(`The age is ${age}`);
  console.log(`The gender is ${genderType} inside function`);
}
printGender();
console.log(`The gender is ${genderType} globally`);
