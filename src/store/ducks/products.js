import { createReducer, createActions } from 'reduxsauce';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  productsRequest: ['category'],
  productsSuccess: ['data'],
  productsFailure: null,
});

export { Types };
export default Creators;

/* Initial State */

export const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export const request = state => ({ ...state, loading: true });

export const success = (state, action) => ({
  data: [...state.data, action.data],
  loading: false,
  error: false,
});

export const failure = () => ({
  ...INITIAL_STATE,
  error: true,
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PRODUCTS_REQUEST]: request,
  [Types.PRODUCTS_SUCCESS]: success,
  [Types.PRODUCTS_FAILURE]: failure,
});
