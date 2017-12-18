import { createReducer, createActions } from 'reduxsauce';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  detailRequest: ['product'],
  detailSuccess: ['category', 'product'],
  detailFailure: null,
});

export { Types };
export default Creators;

/* Initial State */

export const INITIAL_STATE = {
  product: {},
  category: {},
  loading: false,
  error: false,
};

export const request = state => ({ ...state, loading: true });

export const success = (state, action) => ({
  product: action.product,
  category: action.category,
  loading: false,
  error: false,
});

export const failure = () => ({
  ...INITIAL_STATE,
  error: true,
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.DETAIL_REQUEST]: request,
  [Types.DETAIL_SUCCESS]: success,
  [Types.DETAIL_FAILURE]: failure,
});
