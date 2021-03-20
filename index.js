const puppeteer = require('puppeteer');

async function anythingiwant (url) {
  const browser = await puppeteer.launch({headless:false, slowMo:500});
  const page = await browser.newPage();
  await page.goto(url);
let data = await page.evaluate(()=>{
  let title = document.querySelector("#post-858 > div > p:nth-child(3) > strong").innerHTML;
  let textBlock1 =document.querySelector("#post-858 > div > p:nth-child(3) > strong").innerHTML
  let textBlock2 =document.querySelector("#post-858 > div > p:nth-child(3) > strong").innerHTML
  let textBlock3 =document.querySelector("#post-858 > div > p:nth-child(3) > strong").innerHTML
  let textBlock4 =document.querySelector("#post-858 > div > p:nth-child(3) > strong").innerHTML
  return {
    title,
    textBlock1,
    textBlock2,
    textBlock3,
    textBlock4
  }
} ); 


console.log(data);

};


anythingiwant('https://miamiinmiami.com/2020/09/06/ahdriana-amandi-miami-as-text/');
