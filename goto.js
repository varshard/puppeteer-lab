const puppeteer = require('puppeteer')
const {filePath} = require('./config')

async function run() {
    let browser = await puppeteer.launch()
    const page = await browser.newPage()

    console.time('goto')
    await page.goto(`file://${filePath}`)
    console.timeEnd('goto')
    await page.pdf({path: './pdfs/goto.pdf'})
    await browser.close()
}

run()
