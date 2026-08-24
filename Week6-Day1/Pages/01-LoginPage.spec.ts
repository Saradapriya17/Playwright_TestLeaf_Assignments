import { Page } from "@playwright/test";

export class loginProcess{

    page: Page;
    constructor(Lpage:Page){
        this.page = Lpage;
    }
    async loadUrl(url:string){
        await this.page.goto(url);
    }
    async enterCredentials(uName:string, pWrd:string){
        await this.page.locator("#username").fill(uName);
        await this.page.locator("#password").fill(pWrd);
    }
    async clickLogin(){
        await this.page.locator(".decorativeSubmit").click();
    }
}