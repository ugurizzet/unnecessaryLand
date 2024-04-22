const Book = require('../models/Book');

exports.getBooksList = (req, res) => {
  const books = Book.getAll();
  res.render('books', { title: "Books", books });
};
