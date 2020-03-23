import { createStore, combineReducers, compose } from 'redux';
import tasksReducer from '../reducers/tasksReducer';
import { createTask } from '../actions/tasksActions';

const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
        tasks: tasksReducer
    }),
    composeEnhancers()
  );

  store.dispatch(createTask({ id: 1, name: 'Test task', description: 'Test description' }));
  store.dispatch(createTask({ id: 2, name: 'Dayum', description: 'son' }));

  return store;
};