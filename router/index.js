const express = require('express');
const router = express.Router();
const BookAPI = require('./book');

router.use("/books", BookAPI);

module.exports = router;