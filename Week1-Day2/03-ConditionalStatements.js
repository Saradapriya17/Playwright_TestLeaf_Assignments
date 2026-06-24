//Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch
//  messages, and `runTests` with `switch` for test type messages.

function launchBrowser(browserName) {
  if (browserName === "Chrome") {
    console.log("It is a Chrome browser");
  } else {
    console.log("It is not a Chrome browser");
  }
}
function runTests(testType) {
  switch (testType) {
    case "smoke":
      console.log("The test type is Smoke");
      break;
    case "sanity":
      console.log("The test type is Sanity");
      break;
    case "regression":
      console.log("The test type is regression");
      break;
    default:
      console.log("The default test type is Smoke");
      break;
  }
}

launchBrowser("Chrome");
launchBrowser("MSEdge");
runTests("regression");
runTests("Unit test");
