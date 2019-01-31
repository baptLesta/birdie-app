const express = require('express');
const demographicDataCtrl = require('./demographic-data.controller');
const validate = require('express-validation');
const paramValidation = require('../../config/param-validation');

const router = express.Router(); // eslint-disable-line new-cap

router
  .route('/')
  /** GET /api/data - Get list of all categories of demographic data */
  .get(demographicDataCtrl.findAllCategories)

  /** POST /api/data - Get all the different value of data and stats for one categorie */
  .post(validate(paramValidation.createData), demographicDataCtrl.listGroupBy);

module.exports = router;
