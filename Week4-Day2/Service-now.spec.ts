import {test, expect} from "@playwright/test";

test("Service Now Interactions", async({page})=>{

    await page.goto("https://dev419732.service-now.com/");
    await page.getByRole("textbox",{name: "User name"}).fill("admin");
    await page.getByRole("textbox",{name: "Password"}).fill("xcAK8%DT6x^x");
    await page.getByRole("button",{name: "Log in"}).click();

    await page.getByRole("menuitem",{name: "All"}).click();
    await page.getByRole("link", {name: "Service Catalog 3 of 23"}).click();
    const frameName = await page.frameLocator('[src="ui_page.do?sys_id=fae623522fb503104a6578aa6fa4e3b2"]');
    await frameName.getByRole("link",{name: "Mobiles. Cell phones to meet your business needs.", exact: true}).click();
    
    const phonepageFrame = page.frameLocator("#gsft_main");
    await phonepageFrame.getByRole("link",{name: "Apple iPhone 13 pro", exact : true}).click();

    const phonepageFrame1 = page.frameLocator("#gsft_main");
    await phonepageFrame1.locator('//input[@class="cat_item_option radio" and @value="no"]/parent::span').click();
    await phonepageFrame1.locator('[class="form-control cat_item_option "]').click();
    
    const items = await phonepageFrame1.locator('[class="form-control cat_item_option "]').allInnerTexts();
    const a = items[0].split('\n');
    const count1 = a.length;

    await expect(count1).toBe(3);

    await phonepageFrame1.locator('//select[@class="form-control cat_item_option "]').selectOption('500MB');

    await phonepageFrame1.locator('//input[@class="cat_item_option radio" and @value="silver"]/parent::span').click();

    await phonepageFrame1.locator('(//input[@class="cat_item_option radio sc-radio" ]/parent::span)[2]').click()
    

    await phonepageFrame1.getByRole("button", {name: "Order Now", exact: true}).click();
    const orderStatus = await phonepageFrame1.locator('//span[@class="notification-icon icon-check-circle"]/following-sibling::span').innerText();
    
    const title = await  page.title();
    const url = await page.url();
    console.log(title , url, orderStatus);

    await expect(title).toBe("Apple iPhone 13 pro | ServiceNow")
    await expect(url).toBe("https://dev419732.service-now.com/now/nav/ui/classic/params/target/com.glideapp.servicecatalog_cat_item_view.do%3Fv%3D1%26sysparm_id%3D73b1bafa9752cd1021983d1e6253afb5%26sysparm_link_parent%3Dc3d3e02b0a0a0b12005063c7b2fa4f93%26sysparm_catalog%3De0d08b13c3330100c8b837659bba8fb4%26sysparm_catalog_view%3Dcatalog_default%26sysparm_view%3Dcatalog_default");
    await expect(orderStatus).toBe("Thank you, your request has been submitted");
    await page.pause();

})