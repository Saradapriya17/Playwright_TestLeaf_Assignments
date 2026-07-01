//Use callbacks to handle asynchronous tasks in JavaScript.

let browser = "Chrome";
function checkBrowserVersion(callBackFunction) {
  setTimeout(callBackFunction, 2000);
}
function callBack() {
  console.log(`The browser version using callback : ${browser}`);
}
checkBrowserVersion(callBack);
