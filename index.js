const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.render('index');
});

const port = 80;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

