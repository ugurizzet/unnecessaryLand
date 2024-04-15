const homeRouter = require('./routes/home');
const booksRouter = require('./routes/books');
const authorsRouter = require('./routes/authors');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('In progress...');
});

app.use('/', homeRouter);
app.use('/', booksRouter);
app.use('/', authorsRouter);

app.use((req, res, next) => {
    res.status(404).send("Sorry, can't find that!")
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
