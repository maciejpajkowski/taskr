import Layout from '../src/layout/Layout';
import TaskList from '../src/components/TaskList';
import Navbar from '../src/components/Navbar';

const Index = () => (
  <Layout>
    <Navbar>Overview</Navbar>
    <TaskList />
  </Layout>
);

export default Index;