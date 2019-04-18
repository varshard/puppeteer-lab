const puppeteer = require('puppeteer')
const fs = require('fs')
const {filePath} = require('./config')

async function run() {
    const html = fs.readFileSync(filePath, 'utf8')

    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    console.time('goto:waitUntil')
    await page.goto(`file://${filePath}`, {
        waitUntil: 'networkidle2'
    })
    console.timeEnd('goto:waitUntil')
    await browser.close()
}

run()
