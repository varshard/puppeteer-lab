const puppeteer = require('puppeteer')
const {filePath} = require('./config')

async function run() {
    console.time('goto')
    let browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(`file://${filePath}`)
    console.timeEnd('goto')

    await browser.close()
}

run()
