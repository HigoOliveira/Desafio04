import api from 'services/api';
import { call, put, select } from 'redux-saga/effects';
import ActionCreators from 'store/ducks/detail';

export function* getDetail(action) {
  const response = yield call(api.get, `/products/${action.product.id}`);

  const { selected } = yield select(state => state.category);

  if (response.ok) {
    yield put(ActionCreators.detailSuccess(selected, response.data));
  } else {
    yield put(ActionCreators.detailFailure());
  }
}
