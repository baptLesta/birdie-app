import * as types from '../constants/actionType';

var initialState = {
  categories: [],
  data: [],
  selectedCategorie: null,
  isLoading: true,
  undisplayNumber: 0
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
export default function(state, action) {
  state = state || initialState;

  switch (action.type) {
    case types.RECEIVE_DEMOGRAPHIC_DATA:
      return Object.assign({}, state, {
        isLoading: false,
        data: action.demographicData,
        undisplayNumber: action.undisplayNumber
      });

    case types.RECEIVE_CATEGORIES:
      return Object.assign({}, state, {
        categories: action.categories,
        isLoading: true
      });

    case types.SET_SELECTED_CATEGORIE:
      return Object.assign({}, state, {
        selectedCategorie: action.categorie,
        isLoading: true,
      });

    default:
      return state;
  }
}
