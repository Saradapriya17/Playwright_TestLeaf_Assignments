class BasePage{
    findElement(){
        console.log("Finding Element");
    }
    clickElement(){
        console.log("Clicking the element")
    } 
    enterText(){
        console.log("Enter the Credentials")
    }
    performCommonTasks(){
        console.log("Authenticating.....")
    }
}

class LoginPage extends BasePage{
    performCommonTasks(){
        console.log("Username and Password is verified");
    }
}

const BaseObj = new BasePage();
const LoginObj = new LoginPage();

BaseObj.findElement();
BaseObj.clickElement();
BaseObj.enterText();
BaseObj.performCommonTasks();

LoginObj.performCommonTasks();
