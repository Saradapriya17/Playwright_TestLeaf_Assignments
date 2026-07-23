import { Page } from "@playwright/test";

export class loginProcess{

    page: Page;
    constructor(Lpage: Page){
        this.page = Lpage;
    }
    async loadUrl(url: string){
        await this.page.goto(url);
    }
    async addCredentials(uName:string, pwd:string){
        await this.page.locator("#username").fill(uName);
        await this.page.locator("#password").fill(pwd);
    }
    async clickLogin(){
        await this.page.locator("#Login").click();
        await this.page.waitForTimeout(5000);

    }
}
