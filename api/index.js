const puppeteer = require('puppeteer')
const express = require('express')
const app = express()
const fs = require('fs')


let fetch_articles = () =>  puppeteer.launch().then(async(browser) => {
  const page = await browser.newPage()
  await page.goto('https://www.hectar.co/eclairages')
  const articles = 'body > div.section.less-padding-top.more-padding-top.bg-white.wf-section > div > div.w-dyn-list > div > div'
  const name = await page.$$(articles)

  let lst = await Promise.all(name.map(async(e) => ({
    title: (await e.$eval('a > div.card-article-content > h1', el => el.innerText)),
    link: (await e.$eval('a', el => el.getAttribute('href')))
  })))
  fs.writeFileSync('./static/hectar_article.json', JSON.stringify(lst, null, 4))
  await browser.close()
  console.log('fn called')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const dayInMilliseconds = 1000 * 60 * 60 * 24;
setInterval(fetch_articles, dayInMilliseconds)

module.exports = app

if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}
