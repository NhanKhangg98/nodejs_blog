const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const exphbs = require('express-handlebars'); // Require express-handlebars
const path = require('path');


app.use(morgan('combined'));

app.engine('hbs', exphbs.engine({
  extname: 'hbs',
})); // Use exphbs() directly
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));



app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

