const express = require('express');
const path = require('path');
const db = require('./database');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/static', express.static(path.join(__dirname, 'public', 'static')));
app.use(bodyParser.urlencoded({ extended: true}));

app.set('views', path.join(__dirname, 'public', 'views'));
app.set('view engine', 'ejs');

app.route('/')
  .get((req, res) => {
    const messages = db.prepare('SELECT * FROM messages ORDER BY created_at DESC').all();
    res.render('index', { messages });
  })
  .post((req, res) => {
    const name = req.body.name?.trim() || 'Anonymous';
    const content = req.body.content?.trim();
    if (content) {
      db.prepare('INSERT INTO messages (name, content) VALUES (?, ?)').run(name, content);
    }
    res.redirect('/');
});

app.get('/about', (req, res) => res.render('about'));

app.get('/contact', (req, res) => res.render('contact'));

app.listen(PORT, () => console.log('App running at http://localhost:3000'));
