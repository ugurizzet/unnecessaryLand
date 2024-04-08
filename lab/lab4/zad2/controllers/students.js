exports.getAddNewStudentPage = (req, res, next) => {
    res.render('Home', { title: 'Add new student' });
  };