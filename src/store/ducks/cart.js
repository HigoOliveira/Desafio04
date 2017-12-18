import { createReducer, createActions } from 'reduxsauce';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  cartAddProduct: ['category', 'product'],
  cartRemoveProduct: ['item'],
});

export { Types };
export default Creators;

/* Initial State */

export const INITIAL_STATE = [];

export const add = (state, action) => {
  const id = `${action.category.id}-${action.product.id}`;
  const exist = state.filter(item => item.id === id)[0];
  if (exist) {
    return state.map(item =>
      (item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item));
  }
  return [...state, { id, product: action.product, quantity: 1 }];
};

export const remove = (state, action) => (
  state.filter(item => {
    console.tron.log(item);
    console.tron.log(action.item.id)
    return item.id !== action.item.id
  })
);

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CART_ADD_PRODUCT]: add,
  [Types.CART_REMOVE_PRODUCT]: remove,
});
