const puppeteer = require("puppeteer");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const app = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot(
        {
            path: "example1.png",
            fullPage: true
        }
    ) 
    await browser.close();
    rl.close();
}
rl.question("Please Write an Url to print: ", (URL) => {
    app(URL);    
});
