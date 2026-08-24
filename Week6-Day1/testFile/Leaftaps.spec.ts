import {test} from "@playwright/test";
import { loginProcess } from "../Pages/01-LoginPage.spec";
import dotenv from "dotenv";
import { welcomePage } from "../Pages/02-WelcomePage.spec";
import { homePage } from "../Pages/03-HomePage.spec";
import { leadPage } from "../Pages/04-LeadPage.spec";
import { leadForm } from "../Pages/05-CreateLeadForm.spec";
dotenv.config({path:"../Data/01-LoginCred.env"})

test("Leaftaps parameterization", async({page})=>{

    const loginObj = new loginProcess(page);
    await loginObj.loadUrl(process.env.BaseUrlLeaftap as string);
    await loginObj.enterCredentials(process.env.UNameLeaftap as string, process.env.PWordLeaftap as string);
    await loginObj.clickLogin();

    const welcomeObj = new welcomePage(page);
    await welcomeObj.clickCRMSFA();

    const homeObj = new homePage(page);
    await homeObj.selectLeads();

    const leadObj = new leadPage(page);
    await leadObj.createLead();

    const leadFormObj = new leadForm(page);
    await leadFormObj.fillLeadForm();

    await page.pause();

})