exports.getNotFoundPage = (req, res, next) => {
    res.status(404).render('NotFound', { title: 'Not found' });
  };