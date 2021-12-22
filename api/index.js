const express = require('express')
const fetch_articles = require('./fetch_articles')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
  fetch_articles()
})

module.exports = app

const DAY_MS = 1000 * 60 * 60 * 24;
setInterval(fetch_articles, DAY_MS)

if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}
