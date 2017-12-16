import api from 'services/api';
import { call, put, select } from 'redux-saga/effects';
import ActionCreators from 'store/ducks/products';
import ActionCreatorsCategory from 'store/ducks/category';

function* sleep(time) {
  yield new Promise(resolve => setTimeout(resolve, time));
}

export function* getProduct(action) {
  const { data } = yield select(state => state.category);
  const { products } = data.filter(item => item.id === action.category.id)[0];
  if (products !== undefined) {
    yield put(ActionCreators.productsSuccess(products));
  } else {
    yield put(ActionCreators.productsRequest(action.category));
  }
}
export function* getProductByCategory(action) {
  // yield call(sleep, 1000);
  const response = yield call(api.get, `/category_products/${action.category.id}`);

  if (response.ok) {
    yield put(ActionCreators.productsSuccess(response.data.products));
    yield put(ActionCreatorsCategory.categoryAddProducts(action.category, response.data.products));
  } else {
    yield put(ActionCreators.productsFailure());
  }
}
