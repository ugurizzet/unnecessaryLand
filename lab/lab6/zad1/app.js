const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: true
}));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
