const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

const port = 80;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

