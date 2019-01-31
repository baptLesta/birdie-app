const { to, throwError } = require('../services/util.service');
const knex = require('../../config/knex');

/**
* Return the number of value that will not be sent
* @param {string} categorie
* @returns {number}
*/
async function getOtherValueLenght(categorie) {
  const [err, lengthObject] = await to(
    knex('census_learn_sql').countDistinct(`${categorie}  as count`)
  );
  if (err) throwError('Error occurs during the sql request to get other value length.');

  return lengthObject[0].count - 100;
}

/**
* Return all the different categories of demographic data (exept age)
* @returns {Array<string>}
*/
async function getCategories() {
  const [err, columnsData] = await to(
    knex.select().table('census_learn_sql').columnInfo()
  );
  if (err) throwError('Error occurs during the sql request to get categories.');

  const categories = Object.keys(columnsData)
    .map(key => key)
    .filter(key => key !== 'age');

  return categories;
}

/**
* Return all the different value of demographic data from that categorie
* @param {string} categorie the categorie of demographic data
* @returns {Array<Data>}
*/
function getDatas(categorie) {
  return knex.select(categorie)
    .count('* as count')
    .avg('age as age')
    .from('census_learn_sql')
    .groupBy(categorie)
    .orderBy('count', 'desc')
    .limit(101)
    .map((data) => {
      const newObject = {};
      delete Object.assign(newObject, data, { value: data[categorie] })[categorie];

      return newObject;
    });
}

module.exports = {
  getOtherValueLenght,
  getCategories,
  getDatas
};
