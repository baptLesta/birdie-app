import api from '../api';
import * as types from '../constants/actionType';

const setSelectedCategorie = categorie => ({
  type: types.SET_SELECTED_CATEGORIE,
  categorie
});

export const boundSetSelectedCategorie = categorie => dispatch => dispatch(setSelectedCategorie(categorie));

const receiveCategories = categories => ({
  type: types.RECEIVE_CATEGORIES,
  categories
});

export const getCategories = () => dispatch => {
  api.getCategories()
    .then( (response) => {
      dispatch(receiveCategories(response.data.categories));
    });
};
