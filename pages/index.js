import Layout from '../src/layout/Layout';
import TaskList from '../src/components/TaskList';
import Task from '../src/components/Task';
import Navbar from '../src/components/Navbar';
import { Provider } from 'react-redux';
import configureStore from '../src/store/configureStore';
import { createTask } from '../src/actions/tasksActions';

const store = configureStore();
store.dispatch(createTask({ id: 321, description: 'Build a new app' }));

const Index = () => (
  
    <Layout>
      <div>
        <Provider store={store}>
          <Navbar>Overview</Navbar>
          <TaskList>
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
          </TaskList>
        </Provider>
      </div>
    </Layout>
  
);

export default Index;