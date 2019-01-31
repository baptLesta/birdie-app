import axios from 'axios';
import { API_PATH } from '../config/config';

axios.defaults.baseURL = API_PATH;

export default {
  getCategories: () => axios.get('/demographic-data'),
  getDemographicDatas: (categorie) => axios.post('/demographic-data', { 'categorie': categorie })
};
