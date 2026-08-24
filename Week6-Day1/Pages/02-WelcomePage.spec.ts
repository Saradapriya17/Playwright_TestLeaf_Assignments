import { loginProcess } from "./01-LoginPage.spec";

export class welcomePage extends loginProcess{

    async clickCRMSFA(){
        await this.page.locator('//a[contains(text(),"CRM/SFA")]').click();
    }
}