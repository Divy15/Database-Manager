const express = require('express');
const router = express.Router();
const { country_list_with_filteration } = require('../controller/country_list');
const { celebrate, Segments } = require('celebrate');
const paramValidation = require('../validation/country_list');

// country list will get and we can also put filteration also to get result
router.route('/list')
      .post(
        celebrate({[Segments.BODY] : paramValidation.country_list_with_filteration.body}),
        country_list_with_filteration);

module.exports = router;