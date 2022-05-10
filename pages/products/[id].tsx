import type {GetStaticPaths, GetStaticProps, NextPage} from 'next';
import Link from 'next/link';
import CustomButton from '@components/Button/CustomButton';
import IconButton from '@components/Button/IconButton';
import Layout from '@components/layout';
import SimilarItem from '@components/SimilarItem';
import {useRouter} from 'next/router';
import useSWR, {useSWRConfig} from 'swr';
import {Product, User} from '@prisma/client';
import useMutation from '@libs/client/useMutation';
import useUser from '@libs/client/useUser';
import Image from 'next/Image';
import client from '@libs/server/client';

interface ProductWithUser extends Product {
  user: User;
}

interface ItemDetailResponse {
  ok: boolean;
  product: ProductWithUser;
  relatedProducts: Product[];
  isLiked: boolean;
}

// 동적 페이지 id에 따라 데이터가 다름
const ItemDetail: NextPage<ItemDetailResponse> = ({
                                                    product,
                                                    relatedProducts,
                                                    isLiked
                                                  }) => {
  const {user, isLoading} = useUser();
  const router = useRouter();
  // 다른 화면의 데이터를 변경하길 원한다면 unbound mutate 사용
  const {mutate} = useSWRConfig();
  // 해당 화면에서 얻은 데이터만 변경하려면 boundMutate 사용
  const {data, mutate: boundMutate} = useSWR<ItemDetailResponse>(
    router.query.id ? `/api/products/${router.query.id}` : null
  );
  const [toggleFav] = useMutation(`/api/products/${router.query.id}/fav`);

  // Optimistic UI Update
  const onFavClick = async () => {
    if (!data) return;
    // 두번째 인자가 true이면 SWR이 서버에 데이터 검증을 위해 재요청
    boundMutate(
      (prev: any) => prev && {...prev, isLiked: !prev.isLiked},
      false
    );
    // 다른 페이지 SWR 캐시의 데이터를 원하는 곳에서 mutate
    // 1. /api/users/me <= 이 키값을 가진 데이터를 변경하겠다
    // 2. 변경할 데이터는 { ok: false }
    // 3. revalidation
    // 캐시 데이터 변경
    // mutate(
    //   '/api/users/me',
    //   (prev: any) => ({
    //     // 기존 데이터
    //     ok: !prev.ok,
    //   }),
    //   false
    // );

    // // 재 요청
    // mutate('/api/users/me');

    toggleFav({});
  };

  // fallback이 true인 경우
  // 유저에게 원하는 로딩 화면을 보여 줌
  // 백그라운드에서 페이지를 만드는 중...
  if(router.isFallback){
    return(
      <Layout title="Loading for you....">
        <span>is fallback</span>
      </Layout>
    )
  }

  return (
    <Layout canGoBack seoTitle="Product Detail">
      <div className='px-4 py-4'>
        <div className='mb-8'>
          {/* todo change to img */}
          <div className="relative pb-80">
            <Image
              layout="fill"
              src={`https://imagedelivery.net/TQjToaViyjFv2GIO-4tZ_A/${product?.image}/public`}
              className='bg-slate-400 object-cover'
            />
            <h1 className="absolute w-full text-center text-red-500">hello</h1>
          </div>
          <div className='flex cursor-pointer py-3 border-t border-b items-center space-x-3'>
            {/*<img*/}
            {/*  src={`https://imagedelivery.net/TQjToaViyjFv2GIO-4tZ_A/${product?.user?.avatar}/avatar`}*/}
            {/*  className='w-12 h-12 rounded-full'*/}
            {/*/>*/}
            <Image
              width={48}
              height={48}
              src={`https://imagedelivery.net/TQjToaViyjFv2GIO-4tZ_A/${user?.avatar}/avatar`}
              className='w-12 h-12 rounded-full'
            />
            <div>
              <p className='text-sm font-medium text-gray-700'>
                {product?.user?.name}
              </p>
              <Link href={`/profile/${product?.user?.id}`}>
                <a className='text-xs font-medium text-gray-500'>
                  View profile &rarr;
                </a>
              </Link>
            </div>
          </div>
          <div className='mt-5'>
            <h1 className='text-3xl font-bold text-gray-900'>
              {product?.name}
            </h1>
            <span className='text-3xl block mt-3 text-gray-900'>
              ${product?.price}
            </span>
            <p className='text-base my-6 text-gray-700'>
              {product?.description}
            </p>
            <div className='flex items-center justify-between space-x-2'>
              <CustomButton title='Talk to seller'/>
              <IconButton onClick={onFavClick} isLiked={isLiked}>
                {isLiked ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                      clipRule='evenodd'
                    />
                  </svg>
                ) : (
                  <svg
                    className='h-5 w-5'
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
                      d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
        </div>
        <div>
          <h2 className='text-2xl font-bold text-gray-900'>Similar items</h2>
          <div className='mt-6 grid grid-cols-2 gap-4'>
            {relatedProducts?.map((product) => (
              <SimilarItem
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
    // fallback: false,
    // fallback: true,
    // blocking
    // 유저가 getStaticProps나 getStaticPaths를 가지고 있는 페이지를 방문할 때
    // 만약 그 페이지에 해당하는 html 파일이 없다면... fallback: 'blocking'은
    // 유저가 잠시 기다리게 만들고, 백그라운드에서 페이지를 만들어서 유저에게 넘겨줌
    // 딱 한번만 발생. 기본적으로 SSR

    // false
    // 프로젝트의 빌드 과정에서 만들어진 페이지만 조회 가능

    // true
    // request 타임에 페이지를 생성할 수 있게 해주지만,
    // 페이지를 생성하는 동안에 유저에게 무엇인가 보여줌
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  if (!ctx?.params?.id) {
    return {
      props: {},
    };
  }
  const product = await client.product.findUnique({
    where: {
      id: +ctx.params.id.toString(),
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          avatar: true,
        },
      },
    },
  });
  const terms = product?.name.split(' ').map((word) => ({
    name: {
      contains: word,
    },
  }));
  const relatedProducts = await client.product.findMany({
    where: {
      OR: terms,
      AND: {
        id: {
          not: product?.id,
        },
      },
    },
  });
  const isLiked = false;
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      relatedProducts: JSON.parse(JSON.stringify(relatedProducts)),
      isLiked,
    },
  };
};

export default ItemDetail;
