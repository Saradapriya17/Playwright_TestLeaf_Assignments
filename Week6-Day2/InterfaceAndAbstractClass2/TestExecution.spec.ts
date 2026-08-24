import { test } from "@playwright/test";
import { Updation } from "./InheritedClass.spec";

test("Interface, Abstract class, concrete class", async()=>{

    const DBupdateObj = new Updation();
    DBupdateObj.connect();
    DBupdateObj.executeUpdate();
    DBupdateObj.disconnect();
    
})