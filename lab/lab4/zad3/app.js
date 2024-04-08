const express = require('express');
const bodyParser = require('body-parser');
const studentsController = require('./controllers/students');
const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', studentsController.getAddNewStudentPage);
app.post('/add-student', studentsController.addNewStudent);
app.get('/success', studentsController.getAddingNewStudentSuccessPage);
app.get('/students-list', studentsController.getStudentsListPage);

app.get('/', (req, res) => {
  res.render('Home', { title: 'Home' });
});

app.get('/success', (req, res) => {
  res.render('Success', { title: 'Success' });
});

app.get('/students-list', (req, res) => {
  res.render('List', { title: 'List' });
});

app.post('/add-student', (req, res) => {
  res.redirect('/students-list');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

app.use(errorController.getNotFoundPage);