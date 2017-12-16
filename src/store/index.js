import { combineReducers } from 'redux';

/* Reducers */
import navReducer from 'navigation/reducer';
import { reducer as categoryReducer } from './ducks/category';
import { reducer as productsReducer } from './ducks/products';
import { reducer as detailReducer } from './ducks/detail';
import { reducer as cartReducer } from './ducks/cart';

import configureStore from './configureStore';
import rootSaga from './sagas';

export default () => {
  const rootReducer = combineReducers({
    nav: navReducer,
    category: categoryReducer,
    products: productsReducer,
    detail: detailReducer,
    cart: cartReducer,
  });

  return configureStore(rootReducer, rootSaga);
};
