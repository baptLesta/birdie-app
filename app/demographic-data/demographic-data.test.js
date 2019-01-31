const request = require('supertest');
const httpStatus = require('http-status-codes');
const chai = require('chai'); // eslint-disable-line import/newline-after-import
const expect = chai.expect;
const app = require('../../index');

chai.config.includeStack = true;

describe('## Demographic data APIs', () => {
  describe('GET /api/demographic-data', () => {
    it('should list all the demographic data categories', (done) => {
      request(app)
      .get('/api/demographic-data')
      .expect(httpStatus.OK)
      .then((res) => {
        expect(res.body.success).to.equal(true);
        expect(res.body.categories).to.be.an('array');
        done();
      })
      .catch(done);
    });
  });

  describe('POST /api/demographic-data', () => {
    it('should list all the demographic data from the categorie wage per hour', (done) => {
      request(app)
      .post('/api/demographic-data')
      .send({ categorie: 'wage per hour' })
      .expect(httpStatus.OK)
      .then((res) => {
        expect(res.body.success).to.equal(true);
        expect(res.body.datas).to.be.an('array');
        expect(res.body.othersValueLength).to.be.an('number');
        done();
      })
      .catch(done);
    });
  });
});
