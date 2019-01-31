const express = require('express');
const demographicDataRoutes = require('./app/demographic-data/demographic-data.route');
const { sendError } = require('./app/services/util.service');
const httpStatus = require('http-status-codes');

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /data
router.use('/demographic-data', demographicDataRoutes);

router.use((req, res) => { // eslint-disable-line
  if (!req.route) return sendError(res, 'The path of the url match no routes', httpStatus.NOT_FOUND);
});

module.exports = router;
