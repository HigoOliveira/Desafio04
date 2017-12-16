import api from 'services/api';
import { call, put } from 'redux-saga/effects';
import ActionCreators from 'store/ducks/detail';

export function* getDetail(action) {
  const response = yield call(api.get, `/products/${action.product.id}`);

  if (response.ok) {
    yield put(ActionCreators.detailSuccess(response.data));
  } else {
    yield put(ActionCreators.detailFailure());
  }
}
