const express = require('express');
const router = express.Router();
const { celebrate, Segments } = require('celebrate');
const { signup } = require('../controller/signup');
const paramValidation = require('../validation/signup')

router.route('/')
      .post(
        celebrate({ [Segments.BODY] : paramValidation.signup.body }),
        signup);

module.exports = router;