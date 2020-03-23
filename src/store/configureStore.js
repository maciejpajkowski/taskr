import { createStore, combineReducers, compose } from 'redux';
import tasksReducer from '../reducers/tasksReducer';

const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
        tasks: tasksReducer
    }),
    composeEnhancers()
  );

  return store;
};