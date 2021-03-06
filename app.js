const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('template', {
      meta: {
        data: {
          
        }
      }
    })
})

app.get('/1', (req, res) => {
  res.render('pages/1')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})