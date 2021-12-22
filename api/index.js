const express = require('express')
const _fetch = require('./fetch_articles')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
  _fetch.linkedin_post()
  _fetch.articles()
})

module.exports = app

const DAY_MS = 1000 * 60 * 60 * 24;
setInterval(_fetch.articles, DAY_MS)
setInterval(_fetch.linkedin_post, DAY_MS)

if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}
