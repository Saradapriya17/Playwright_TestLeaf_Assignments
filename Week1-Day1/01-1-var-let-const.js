const browserName = "Chrome";
function getBrowserName(browserName) {
  if (browserName === "Chrome") {
    console.log("The browsername is chrome");
    var browserName = "chrome browser";
  } else {
    console.log("The browsername is not chrome");
  }
  console.log(`The browser is ${browserName}`); //if let, it takes the global variable(as it is block scope) and if var, it takes the local variable
}

getBrowserName(browserName);
