import api from 'services/api';
import { call, put } from 'redux-saga/effects';
import ActionCreators from 'store/ducks/detail';

function* sleep(time) {
  yield new Promise(resolve => setTimeout(resolve, time));
}

export function* getDetail(action) {
  yield call(sleep, 5000);
  const response = yield call(api.get, `/products/${action.product.id}`);

  if (response.ok) {
    yield put(ActionCreators.detailSuccess(response.data));
  } else {
    yield put(ActionCreators.detailFailure());
  }
}
