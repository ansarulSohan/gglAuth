const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engin', 'ejs');


app.get('/', async (req, res) => {
  res.render('index.ejs');
})

app.get('/login', async (req, res) => {
  res.render('login.ejs');
})

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
})