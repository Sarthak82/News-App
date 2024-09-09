const express = require('express');
const router = express.Router();
const { api } = require('../controllers/newsContollers'); // Ensure this path is correct

router.get('/news', api); // This sets up the /news route

module.exports = router;
