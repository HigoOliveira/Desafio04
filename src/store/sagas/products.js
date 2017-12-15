import api from 'services/api';
import { call, put, select } from 'redux-saga/effects';
import ActionCreators from 'store/ducks/products';

export function* getProducts(action) {
  const { data } = yield select(state => state.products);
  const alreadyExists = data.filter(item => item.id === action.category.id);
  if (alreadyExists.length) {
    return;
  }
  const response = yield call(api.get, `/category_products/${action.category.id}`);

  if (response.ok) {
    yield put(ActionCreators.productsSuccess(response.data));
  } else {
    yield put(ActionCreators.produtcsFailure());
  }
}
