import Layout from '../src/layout/Layout';
import Summary from '../src/components/Summary';
import TaskList from '../src/components/TaskList';
import Task from '../src/components/Task';

const Index = () => (
  <Layout>
    <Summary />
    <TaskList>
      <Task />
    </TaskList>
  </Layout>
);

export default Index;