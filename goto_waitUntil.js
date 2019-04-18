const puppeteer = require('puppeteer')
const fs = require('fs')
const {filePath} = require('./config')

async function run() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    console.time('goto:waitUntil')
    await page.goto(`file://${filePath}`, {
        waitUntil: 'networkidle0'
    })
    console.timeEnd('goto:waitUntil')
    await page.pdf({path: './pdfs/goto_waituntil.pdf'})
    await browser.close()
}

run()
