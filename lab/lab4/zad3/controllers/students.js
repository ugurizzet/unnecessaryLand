let students = [];
let nextId = 1;

exports.getAddNewStudentPage = (req, res, next) => {
    res.render('Home', { title: 'Add new student' });
  };

exports.addNewStudent = (req, res, next) => {
  const { fullName, code, fieldOfStudies } = req.body;
  const newStudent = {
    id: nextId,
    fullName,
    code,
    fieldOfStudies
  };
  students.push(newStudent);
  nextId++;
  res.redirect('/success');
};

exports.getAddingNewStudentSuccessPage = (req, res, next) => {
  res.render('Success', { 
    title: 'Success',
    message: 'Student has been added with success!' 
  });
};

exports.getStudentsListPage = (req, res, next) => {
  res.render('List', {
    title: 'Students List',
    students: students
  });
};