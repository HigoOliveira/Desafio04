import { takeLatest, all } from 'redux-saga/effects';

/* Types */
import { Types as CategoryTypes } from 'store/ducks/category';

/* Sagas */
import { getCategories } from './category';

export default function* root() {
  yield all([
    takeLatest(CategoryTypes.CATEGORY_REQUEST, getCategories),
  ]);
}
