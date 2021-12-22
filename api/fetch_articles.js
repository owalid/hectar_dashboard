const puppeteer = require('puppeteer')
const fs = require('fs')
const FILE_NAME = './static/hectar_articles.json'

module.exports = async () => puppeteer.launch().then(async(browser) => {
  const page = await browser.newPage()
  await page.goto('https://www.hectar.co/eclairages')
  const articles_selector = 'body > div.section.less-padding-top.more-padding-top.bg-white.wf-section > div > div.w-dyn-list > div > div'
  const date_selector = 'a > div.card-article-content > div.card-article-featured-about-wrapper > div:nth-child(2) > div'

  const name = await page.$$(articles_selector)

  let lst = await Promise.all(name.map(async(e) => ({
    title: (await e.$eval('a > div.card-article-content > h1', el => el.innerText)),
    link: 'https://hectar.co' + (await e.$eval('a', el => el.getAttribute('href'))),
    date: (await e.$eval(date_selector, el => el.innerText))
  })))
  fs.writeFileSync(FILE_NAME, JSON.stringify(lst, null, 4))
  await browser.close()
  console.log('articles updated')
})
