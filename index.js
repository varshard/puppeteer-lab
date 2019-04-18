const puppeteer = require('puppeteer')
const fs = require('fs')

async function run() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    const options = {
        // waitUntil: 'networkidle2'
    }
    console.time('goto')
    await page.goto('file:///Users/title/playground/play-puppeteer/sample/puppeteer_api.md at v1.14.0 · GoogleChrome_puppeteer.html', options)
    console.timeEnd('goto')
    console.log('title goto', await page.title())

    const page2 = await browser.newPage()
    const html = fs.readFileSync('/Users/title/playground/play-puppeteer/sample/puppeteer_api.md at v1.14.0 · GoogleChrome_puppeteer.html', 'utf8')

    console.time('setContent')
    await page2.setContent(html, options)
    console.timeEnd('setContent')
    console.log('title setCOntent', await page2.title())

    const title = await page2.title()
    browser.close()

    return title
}

run().then(title => {
    console.log('run', title)
})
