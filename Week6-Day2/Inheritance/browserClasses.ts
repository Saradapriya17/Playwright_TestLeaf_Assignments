class Browser{
    browserName: string;
    browserVersion: string;
    constructor(bName: string, bVersion: string){
        this.browserName = bName;
        this.browserVersion = bVersion;
        console.log(this.browserName, this.browserVersion);
    }
    openURL(){
        console.log("Navigating to URL");
    }
    navigateBack(){
        console.log("Navigate back from current page");
    }
    closeBrowser(){
        console.log("Closing the browser");
    }

}

class Chrome extends Browser{
    openIncognito(){
        console.log("Open browser in Incognito mode");
    }
    clearCache(){
        console.log("Clearing the cache");
    }
}
 
class Edge extends Browser{
    takeSnap(){
        console.log("Snapshot taken");
    }
    clearCookies(){
        console.log("Clearing the cookies");
    }
}
class Safari extends Browser{
    readerMode(){
        console.log("Changing to reader mode");
    }
    fullScreenMode(){
        console.log("Changing to fullscreen mode");
    }
}

const BrowserObj = new Browser("Firefox","ABC");
BrowserObj.openURL();
BrowserObj.navigateBack();
BrowserObj.closeBrowser();

const ChromeObj = new Chrome("Chrome","1");
ChromeObj.openURL();
ChromeObj.openIncognito();
ChromeObj.clearCache();
ChromeObj.navigateBack();
ChromeObj.closeBrowser();

const EdgeObj = new Edge("Edge","2");
EdgeObj.openURL();
EdgeObj.clearCookies();
EdgeObj.takeSnap();
EdgeObj.closeBrowser();

const SafariObj = new Safari("Safari","3");
SafariObj.openURL();
SafariObj.fullScreenMode();
SafariObj.readerMode();
SafariObj.closeBrowser();