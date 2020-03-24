import { useRouter } from 'next/router';
import Layout from '../../src/layout/Layout';
import EditTask from '../../src/components/EditTask';

export default function TaskEdit() {
  const router = useRouter();

  return (
    <Layout>
      <EditTask id={Number(router.query.id)} />
    </Layout>
  );
}