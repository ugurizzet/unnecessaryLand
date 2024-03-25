const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<title>Home</title><body><p>HOME</p></body>');
});

app.get('/student', (req, res) => {
    res.send('<title>Student</title><body><p>STUDENT</p></body>');
});

app.get('/add-student', (req, res) => {
    res.send('<title>Add Student</title><body><p>ADD STUDENT</p></body>');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
