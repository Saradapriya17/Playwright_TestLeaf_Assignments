import { loginProcess } from "./01-LoginPage.spec";

export class homePage extends loginProcess{

    async selectLeads(){
        await this.page.getByRole("link",{name: "Leads", exact: true}).click();
    }
}

