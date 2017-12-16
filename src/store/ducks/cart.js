import { createReducer, createActions } from 'reduxsauce';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  cartAddProduct: ['product'],
  cartRemoveProduct: ['product'],
});

export { Types };
export default Creators;

/* Initial State */

export const INITIAL_STATE = [];

export const add = (state, action) => {
  const exist = state.filter(item => item.product.id === action.product.id)[0];
  if (exist) {
    return state.map(item =>
      (item.product.id === action.product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item));
  }
  return [...state, { product: action.product, quantity: 1 }];
};

export const remove = (state, action) => (
  state.filter(item => item.product.id !== action.product.id)
);

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CART_ADD_PRODUCT]: add,
  [Types.CART_REMOVE_PRODUCT]: remove,
});
