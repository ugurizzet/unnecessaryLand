const express = require('express');
const router = express.Router();
const authorsController = require('../controllers/authors');

router.get('/author/list', authorsController.getAuthorsList);

module.exports = router;
