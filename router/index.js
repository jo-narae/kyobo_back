const express = require('express');
const router = express.Router();
const BookAPI = require('./book');
const ReviewAPI = require('./review');

router.use("/books", BookAPI);
router.use("/reviews", ReviewAPI);

module.exports = router;