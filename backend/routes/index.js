const express = require('express');
const router = express.Router();
const countryRoute = require('./country_list');
const signupRoute = require('./signup');

router.use('/country', countryRoute);
router.use('/signup', signupRoute);

module.exports = router;