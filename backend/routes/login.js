const express = require('express');
const router = express.Router();
const { celebrate, Segments } = require('celebrate');
const { login } = require('../controller/login');
const paramValidation = require('../validation/login');
const passport = require('../helper/passport');

router.route('/')
      .post(
        celebrate({ [Segments.BODY] : paramValidation.login.body}) ,
        passport.authenticate('local'),
        login
      )

module.exports = router;