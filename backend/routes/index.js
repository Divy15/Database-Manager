const express = require('express');
const router = express.Router();
const countryRoute = require('./country_list');

router.use('/country', countryRoute);

module.exports = router;