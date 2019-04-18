const puppeteer = require('puppeteer')
const fs = require('fs')
const {filePath} = require('./config')

async function run() {
    const html = fs.readFileSync(filePath, 'utf8')

    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    console.time('setContent:waitUntil')
    await page.setContent(html, {
        waitUntil: 'networkidle2'
    })
    console.timeEnd('setContent:waitUntil')
    await browser.close()
}

run()
