import { Amazon } from "./InheritAbstractClass.spec";
import { test } from "@playwright/test";

test("Interface, Abstract class, concrete class", async()=>{

    const amazonObj = new Amazon();
    await amazonObj.cashOnDelivery();
    await amazonObj.upiPayments();
    await amazonObj.cardPayments();
    await amazonObj.internetBanking();
    await amazonObj.recordPaymentDetails("Successful");
})