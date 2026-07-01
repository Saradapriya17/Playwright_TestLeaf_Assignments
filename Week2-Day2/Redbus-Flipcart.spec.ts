// navigate two websites in two separate browser instances (Edge and Firefox),
// retrieve page information, and print the page titles and URLs.

import { chromium, firefox, test } from "@playwright/test";

test("Redbus - Chrome, FlipKart - Firefox", async () => {
  const browser = await chromium.launch({ headless: false, channel: "msedge" });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.redbus.in");
  const title = await page.title();
  const url = await page.url();
  console.log(`Title : ${title}`);
  console.log(`URL : ${url}`);

  const browserFirefox = await firefox.launch({ headless: false });
  const contextFirefox = await browserFirefox.newContext();
  const pageFirefox = await contextFirefox.newPage();
  await pageFirefox.goto("https://www.flipkart.com");
  const titleFirefox = await pageFirefox.title();
  const urlFirefox = await pageFirefox.url();
  console.log(`Title : ${titleFirefox}`);
  console.log(`URL : ${urlFirefox}`);
});
