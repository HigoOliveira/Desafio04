import { combineReducers } from 'redux';

/* Reducers */
import navReducer from 'navigation/reducer';
import { reducer as categoryReducer } from './ducks/category';
import { reducer as productsReducer } from './ducks/products';

import configureStore from './configureStore';
import rootSaga from './sagas';

export default () => {
  const rootReducer = combineReducers({
    nav: navReducer,
    category: categoryReducer,
    products: productsReducer,
  });

  return configureStore(rootReducer, rootSaga);
};
