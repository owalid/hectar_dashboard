const puppeteer = require('puppeteer')
const fs = require('fs')
const ARTICLE_FILE_NAME = './static/hectar_articles.json'
const LINKEDIN_FILE_NAME = './static/linkedin_post.json'

module.exports = {
  articles: async () => puppeteer.launch().then(async(browser) => {
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
    fs.writeFileSync(ARTICLE_FILE_NAME, JSON.stringify(lst, null, 4))
    await browser.close()
    console.log('articles updated')
  }),

  linkedin_post: async () => puppeteer.launch().then(async(browser) => {
    const page = await browser.newPage()
    await page.goto('https://www.linkedin.com/uas/login');

    await page.type('#username', 'wohibod112@swsguide.com');
    await page.type('#password', 'wohibod112');

    await page.click('#organic-div > form > div.login__form_action_container > button');

    await page.waitForNavigation();

    console.log('New Page URL:', page.url());

    await page.goto('https://www.linkedin.com/company/hectar/posts/?feedView=all')
    let princ = ''

    princ = '#main > div.org-grid__content-height-enforcer > div > div.grid__col--lg-17.grid__col.ph0 > div.feed-container-theme > div > div.scaffold-finite-scroll__content > div > div:nth-child(1) > div:nth-child(1) > div'


    const text = ' div.feed-shared-update-v2__description-wrapper > div > div > span > span > span'
    const date_selector = 'div.feed-shared-actor.display-flex.feed-shared-actor--with-control-menu > a > div.feed-shared-actor__meta.relative > span.feed-shared-actor__sub-description.t-12.t-normal.t-black--light > span > span.visually-hidden'
    const name = await page.$$(princ)
    let lst = await Promise.all(name.map(async(e) => ({
      title: (await e.$eval(text, el => el.innerText)),
      // link: 'https://hectar.co' + (await e.$eval('a', el => el.getAttribute('href'))),
      date: (await e.$eval(date_selector, el => el.innerHTML))
    })))
    fs.writeFileSync(LINKEDIN_FILE_NAME, JSON.stringify(lst, null, 4))
    await browser.close()
  })
}
