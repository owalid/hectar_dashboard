/* eslint-disable camelcase */
const puppeteer = require('puppeteer')
const fs = require('fs')
const ARTICLE_FILE_NAME = './static/hectar_articles.json'
const LINKEDIN_FILE_NAME = './static/linkedin_post.json'
const LUNCH_FILE_NAME = './static/lunch.json'
const GOOGLE_NEW_FILE_NAME = './static/google_news.json'
let Parser = require('rss-parser');
let parser = new Parser();

module.exports = {
  google_news: async () => {
    let feed = await parser.parseURL('https://news.google.com/rss/search?q="hectar"&hl=fr&gl=FR&ceid=FR:fr');
    console.log(feed.title);

    lst = feed.items.slice(0, 4)
    fs.writeFileSync(GOOGLE_NEW_FILE_NAME, JSON.stringify(lst, null, 4))
  },
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

  linkedin_post: () => puppeteer.launch().then(async(browser) => {
    const page = await browser.newPage()
    await page.goto('https://www.linkedin.com/uas/login');

    await page.type('#username', process.env.NUXT_LINKEDIN_EMAIL);
    await page.type('#password', process.env.NUXT_LINKEDIN_PASSWORD);

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
      date: (await e.$eval(date_selector, el => el.innerText))
    })))
    fs.writeFileSync(LINKEDIN_FILE_NAME, JSON.stringify(lst, null, 4))
    await browser.close()
  }),
  hectar_lunch: async () => puppeteer.launch().then(async(browser) => {
    const page = await browser.newPage()
    await page.goto('https://hectar.typeform.com/hectar-lunch');
    const button_selector = '#stkv-form-root > div.AnimateStyled-sc-__sc-nw4u3g-0.fanji > div > div:nth-child(2) > div > div > div > nav > button'
    await page.$eval(button_selector, form => form.click());
    await page.$eval(button_selector, form => form.click());
    await page.$eval(button_selector, form => form.click());

    const lst_selector = '#block-01FHFTK37BPH77ACQH6A710EKG > div > div > div > div > div > div > fieldset > div.SpacerWrapper-sc-__sc-4rs8xl-0.eWJrrP > div > div:nth-child(1) > div > div.ChoicesLayoutWrapper-sc-__sc-qpux4o-1.fbRygj > div > div > div > div '
    const title = 'div.ChoiceContentWrapper-sc-__sc-5l59g2-1.hapVvo > div.ChoiceContent-sc-__sc-5l59g2-2.rIcjV > div'
    const image_selector = 'div.ImageSupersizeRoot-sc-__sc-miqifx-2.iMgEQE > img'
    const lunch_lst = await page.$$(lst_selector)

    let lst = await Promise.all(lunch_lst.map(async(e) => ({
      image: (await e.$eval(image_selector, el => el.src)),
      title: (await e.$eval(title, el => el.innerText)),
    })))
    fs.writeFileSync(LUNCH_FILE_NAME, JSON.stringify(lst, null, 4))
  }),
  weather: () => puppeteer.launch().then(async(browser) => {
    const page = await browser.newPage();
    await page.goto('https://app.sencrop.com/login');
    
    
    await page.waitForSelector("input[name=email]")
    await page.type("input[name=email]", process.env.NUXT_SENCROP_EMAIL)
    await page.waitForSelector("input[name=password]")
    await page.type("input[name=password]", process.env.NUXT_SENCROP_PASSWORD)
    // await input_email("ABCDE");
    // await input_password("ABCDE");
    await page.keyboard.press('Enter')
    await page.waitForTimeout(2000)
    await page.waitForNavigation();
    await page.waitForNavigation();

    const card_device_selector = "[id*='card-device-'] > div:nth-child(2) > div:nth-child(1)"
    await page.waitForSelector(card_device_selector)

    const pluviometry_selector = card_device_selector + "> div:nth-child(1) > div > div"
    await page.waitForSelector(pluviometry_selector)

    const pluv_list = await page.$$eval(pluviometry_selector, elmts => elmts.map((elmt) => {
      const text = elmt.innerText

      const {0: value, 1: label_time} = text.split("\n\n")

      return {
        value: value.split('\n').join(" "), label_time
      }
    }))

    const temperature_selector = card_device_selector + "> div:nth-child(2) > div > div"
    
    await page.waitForSelector(temperature_selector)

    const temp_list = await page.$$eval(temperature_selector, elmts => elmts.map((elmt) => {
      const text = elmt.innerText
      
      const text_splited = text.split("\n\n")
      const {0: now, 1: unit, 2: up, 3: down} = text_splited[1].split('\n')
      return { label: text_splited[0], unit, now, up, down}
    }))
    
    fs.writeFileSync(WEATHER_FILE_NAME, JSON.stringify({pluv_list, temp_list}, null, 4))
    await browser.close()
  })
}
