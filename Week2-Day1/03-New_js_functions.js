//Task 1 : Function Declaration
function userProfile(name) {
  console.log(`Hello ${name}`);
}
userProfile("Saradapriya");

//Task 2 : Arrow function
let double = (num) => console.log(num * 2);
double(20);

//Task 3 : Anonymous function
setTimeout(() => {
  console.log("This message is delayed by 2 seconds");
}, 2000);

//Task 4 : Callback function
function getUserData(printLogFunction) {
  setTimeout(printLogFunction, 3000);
}
function printLog() {
  console.log("Call Back Function");
}
getUserData(printLog);
