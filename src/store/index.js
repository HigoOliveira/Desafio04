import { combineReducers } from 'redux';

/* Reducers */
import navReducer from 'navigation/reducer';
import { reducer as categoryReducer } from './ducks/category';

import configureStore from './configureStore';
import rootSaga from './sagas';

export default () => {
  const rootReducer = combineReducers({
    nav: navReducer,
    category: categoryReducer,
  });

  return configureStore(rootReducer, rootSaga);
};
