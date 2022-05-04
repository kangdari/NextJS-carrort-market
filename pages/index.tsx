import type { NextPage } from 'next';
import Layout from '@components/layout';
import ListItem from '@components/ListItem';
import useUser from '@libs/client/useUser';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  const { user, isLoading } = useUser();

  return (
    <Layout title='홈' hasTabBar>
      <Head>
        <title>Home</title>
      </Head>
      <div className='flex flex-col space-y-5 py-10 divide-y-2 '>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <ListItem key={i} id={1} />
        ))}
        <Link href={`/products/upload`}>
          <button className='fixed bg-orange-400 hover:bg-orange-500 transition-colors bottom-24 right-5  rounded-full p-4 shadow-xl text-white'>
            <svg
              className='h-6 w-6'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 6v6m0 0v6m0-6h6m-6 0H6'
              />
            </svg>
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
