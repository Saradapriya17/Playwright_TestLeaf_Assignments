//a JavaScript program that defines a function to compute the intersection of two arrays.
// The intersection should include elements that appear in both arrays without any duplicates.

let arr1 = [2, 4, 2, 6, 7];
let arr2 = [2, 5, 8];
let uniqueVal1 = new Set(arr1);
let uniqueVal2 = new Set(arr2);
uniqueArrVal1 = Array(...uniqueVal1);
uniqueArrVal2 = Array(...uniqueVal2);
console.log(uniqueArrVal1);
let resultArray = [];

for (let i = 0; i < uniqueArrVal1.length; i++) {
  if (uniqueArrVal2.includes(uniqueArrVal1[i])) {
    resultArray.push(uniqueArrVal1[i]);
  }
}
console.log(resultArray);
