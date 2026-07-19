import {test,expect} from "@playwright/test";
import path from "node:path";

test("File download", async({page,context})=>{
    await page.goto("https://the-internet.herokuapp.com/download");
    const [fDown] = await Promise.all([
        context.waitForEvent("download"),
        page.getByText('file.json').click()
    ])
    const fileName = fDown.suggestedFilename();
    await fDown.saveAs(path.join(`__dirname,../../Data/${fileName}`));
    await page.pause();
})

test("File Upload",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload");

    await page.locator('[id="file-upload"]').setInputFiles(path.join(`__dirname,../../Data/logo.png`)); 
    const [fUpload] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.locator('[id="drag-drop-upload"]').click()
    ]);

    await fUpload.setFiles(path.join(`__dirname,../../Data/logo.png`));
    await page.pause();
    
})