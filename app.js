const express = require('express')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 3000;
app.use('/static', express.static(path.join(__dirname, 'public', 'static')))

app.set('views', path.join(__dirname, 'public', 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

app.listen(PORT, () => console.log('App running at http://localhost:3000'))
