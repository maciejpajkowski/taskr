import Layout from '../src/layout/Layout';
import TaskList from '../src/components/TaskList';
import Task from '../src/components/Task';
import Navbar from '../src/components/Navbar';

const Index = () => (
  <Layout>
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
  </Layout>
);

export default Index;