import type {NextPage} from 'next';
import Image from 'next/Image';
import Layout from '@components/layout';
import ListItem from '@components/ListItem';
import useUser from '@libs/client/useUser';
import Head from 'next/head';
import Link from 'next/link';
import useSWR, {SWRConfig} from 'swr';
import {Product} from '@prisma/client';
import screenShot from '../public/screenShot.png';
import client from '@libs/server/client';

interface ProductWithCount extends Product {
  _count: {
    favs: number;
  };
}

interface ProductResponse {
  ok: boolean;
  products: ProductWithCount[];
}

const Home: NextPage = () => {
  useUser();
  const {data} = useSWR<ProductResponse>('/api/products');

  return (
    <Layout title='홈' hasTabBar>
      <Head>
        <title>Home</title>
      </Head>
      <div className='flex flex-col space-y-5 py-10 divide-y-2 '>
        {data ? data?.products?.map((product) => (
          <ListItem
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            image={''}
            commnets={1}
            hearts={product._count?.favs}
          />
        )) : 'loading'}

        <Link href={`/products/upload`}>
          <button
            className='fixed bg-orange-400 hover:bg-orange-500 transition-colors bottom-24 right-5  rounded-full p-4 shadow-xl text-white'>
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
      <Image src={screenShot} placeholder="blur"/>
    </Layout>
  );
};


// export default Home;

const Page: NextPage<{ products: ProductWithCount[] }> = ({products}) => {
  // SWRConfig로 Home 컴포넌트를 감싸주고
  // '/api/products'키의 데이터 => 캐시 저장
  return (
    <SWRConfig value={{
      fallback: {
        '/api/products': {
          ok: true,
          products
        }
      }
    }}>
      <Home/>
    </SWRConfig>
  );
};

export async function getServerSideProps() {
  const products = await client.product.findMany({});

  return {
    props: {
      products: JSON.parse(JSON.stringify(products))
    }
  };
}


export default Page;


