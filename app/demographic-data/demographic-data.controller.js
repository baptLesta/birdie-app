const { to, sendError, sendSuccess } = require('../services/util.service');
const httpStatus = require('http-status-codes');
const demographicDataService = require('./demographic-data.service');

/**
 *  Get demographic datas group by categorie
 * @param {object} req
 * @property {string} req.body.categorie - The demographic data categorie.
 * @param {object} res
 * @returns {*}
 */
async function listGroupBy(req, res) {
  const categorie = req.body.categorie;
  let err, othersValueLength, results;

  [err, results] = await to(demographicDataService.getDatas(categorie));
  if (err) return sendError(res, `The categorie: '${categorie}' doesn't exist.`, httpStatus.NOT_FOUND);

  if (results.length !== 101) {
    return sendSuccess(res, { datas: results, categorie });
  }

  [err, othersValueLength] = await to(demographicDataService.getOtherValueLenght(categorie));
  if (err) return sendError(res, err, httpStatus.I);

  return sendSuccess(res, { datas: results, categorie, othersValueLength });
}

/**
 *  Find the differents categories of demographic datas
 * @param {object} res object respone
 * @returns {*}
 */
async function findAllCategories(req, res) {
  const [err, categories] = await to(demographicDataService.getCategories());
  if (err) return sendError(res, err, httpStatus.NOT_FOUND);

  return sendSuccess(res, { categories }, httpStatus.OK);
}

module.exports = {
  listGroupBy,
  findAllCategories
};
