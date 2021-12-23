const fs = require('fs');
const express = require('express')
const _fetch = require('./fetch_datas')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
  _fetch.google_news()
  _fetch.hectar_lunch()
  // _fetch.linkedin_post()
  // _fetch.articles()
})

app.get('/weather', (req, res) => {
  const weather_raw = fs.readFileSync('./static/weather.json');
  const weather = JSON.parse(weather_raw);
  res.json(weather)
})

module.exports = app

const DAY_MS = 1000 * 60 * 60 * 24;
const QUART_HOUR = 1000 * 60 * 15; // EVERY 15 MINUTES

setInterval(_fetch.articles, DAY_MS)
setInterval(_fetch.linkedin_post, DAY_MS)
setInterval(_fetch.hectar_lunch, DAY_MS)
setInterval(_fetch.weather, QUART_HOUR)


if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}
