import { createReducer, createActions } from 'reduxsauce';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  categoryRequest: null,
  categorySuccess: ['data'],
  categoryFailure: null,
  categorySelect: ['category'],
  categoryAddProducts: ['category', 'products'],
});

export { Types };
export default Creators;

/* Initial State */

export const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
  selected: null,
};

export const request = state => ({ ...state, loading: true });

export const success = (state, action) => ({
  data: action.data,
  loading: false,
  error: false,
});

export const failure = () => ({
  ...INITIAL_STATE,
  error: true,
});

export const select = (state, action) => ({ ...state, selected: action.category });

export const addProducts = (state, action) => ({
  ...state,
  data: state.data.map(item =>
    (item.id === action.category.id
      ? { ...item, products: action.products }
      : item)),
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CATEGORY_REQUEST]: request,
  [Types.CATEGORY_SUCCESS]: success,
  [Types.CATEGORY_FAILURE]: failure,
  [Types.CATEGORY_SELECT]: select,
  [Types.CATEGORY_ADD_PRODUCTS]: addProducts,
});
