import { takeLatest, all } from 'redux-saga/effects';

/* Types */
import { Types as CategoryTypes } from 'store/ducks/category';
import { Types as ProductsTypes } from 'store/ducks/products';
import { Types as DetailTypes } from 'store/ducks/detail';

/* Sagas */
import { getCategories } from './category';
import { getProduct, getProductByCategory } from './products';
import { getDetail } from './detail';

export default function* root() {
  yield all([
    takeLatest(CategoryTypes.CATEGORY_REQUEST, getCategories),
    takeLatest(ProductsTypes.PRODUCTS_REQUEST, getProductByCategory),
    takeLatest(CategoryTypes.CATEGORY_SELECT, getProduct),
    takeLatest(DetailTypes.DETAIL_REQUEST, getDetail),
  ]);
}
