const express = require('express');
const router = express.Router();
const countryRoute = require('./country_list');
const signupRoute = require('./signup');
const loginRoute = require('./login')

router.use('/country', countryRoute);
router.use('/signup', signupRoute);
router.use('/login', loginRoute);


module.exports = router;