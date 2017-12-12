import { combineReducers } from 'redux';
import configureStore from './configureStore';
import rootSaga from './sagas';

export default () => {
  const reducers = combineReducers({
  });

  return configureStore(() => ({}), rootSaga);
};
