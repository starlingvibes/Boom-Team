import type { NextPage } from 'next';
import Layout from '../components/layouts/MainLayout';
// import Login from '../components/layouts/partials/login.component';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className='flex flex-col container mx-auto py-40'>
        <h1 className='text-red-700 font-extrabold'>Welcome to Boom Team!</h1>
      </div>
      {/* <Login /> */}
    </Layout>
  );
};

export default Home;
