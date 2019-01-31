import { combineReducers } from 'redux';

// Import custom components
import demographicReducer from './demographicReducer';

const rootReducer = combineReducers({
  demographic: demographicReducer,
});

export default rootReducer;
