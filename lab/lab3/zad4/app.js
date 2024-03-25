const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    const currentDate = new Date().toLocaleString();
    console.log(`Request ${req.method} on path ${req.url} ${currentDate}`);
    next();
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/student', (req, res) => {
    res.sendFile(__dirname + '/views/student.html');
});
app.get('/add-student', (req, res) => {
    res.sendFile(__dirname + '/views/add-student.html');
});

app.post('/add-student', (req, res) => {
    const { firstName, lastName, course } = req.body;
    res.send(`Hello, ${firstName} ${lastName} on ${course} studies!`);
});

app.get('/users', (req, res) => {
    res.sendFile(__dirname + '/views/users.html');
});

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

let students = [];

app.get('/', (req, res) => {
    res.send('<title>Home</title><body><p>HOME</p></body>');
});

app.get('/student', (req, res) => {
    res.render('student');
});

app.post('/student', (req, res) => {
    const { firstName, lastName, course } = req.body;
    students.push({ firstName, lastName, course });
    res.send(`Hello, ${firstName} ${lastName} on ${course} studies!`);
});

app.get('/users', (req, res) => {
    let userList = '<ul>';
    students.forEach(student => {
        userList += `<li>${student.firstName} ${student.lastName} - ${student.course}</li>`;
    });
    userList += '</ul>';
    res.send(userList);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.use(express.static('public'));