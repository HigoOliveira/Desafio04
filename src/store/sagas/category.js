import api from 'services/api';
import { call, put } from 'redux-saga/effects';
import ActionCreators from 'store/ducks/category';

export function* getCategories() {
  const response = yield call(api.get, '/categories');

  if (response.ok) {
    yield put(ActionCreators.categorySuccess(response.data));
    yield put(ActionCreators.categorySelect(response.data[0]));
  } else {
    yield put(ActionCreators.categoryFailure());
  }
}
