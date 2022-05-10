import type {NextPage} from 'next';
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

interface ProductWithUser extends Product {
  user: User;
}

interface ItemDetailResponse {
  ok: boolean;
  product: ProductWithUser;
  relatedProducts: Product[];
  isLiked: boolean;
}

const ItemDetail: NextPage = () => {
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

  return (
    <Layout canGoBack seoTitle="Product Detail">
      <div className='px-4 py-4'>
        <div className='mb-8'>
          {/* todo change to img */}
          <div className="relative pb-80">
            <Image
              layout="fill"
              src={`https://imagedelivery.net/TQjToaViyjFv2GIO-4tZ_A/${data?.product?.image}/public`}
              className='bg-slate-400 object-cover'
            />
            <h1 className="absolute w-full text-center text-red-500">hello</h1>
          </div>
          <div className='flex cursor-pointer py-3 border-t border-b items-center space-x-3'>
            {/*<img*/}
            {/*  src={`https://imagedelivery.net/TQjToaViyjFv2GIO-4tZ_A/${data?.product?.user?.avatar}/avatar`}*/}
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
                {data?.product?.user?.name}
              </p>
              <Link href={`/profile/${data?.product?.user?.id}`}>
                <a className='text-xs font-medium text-gray-500'>
                  View profile &rarr;
                </a>
              </Link>
            </div>
          </div>
          <div className='mt-5'>
            <h1 className='text-3xl font-bold text-gray-900'>
              {data?.product?.name}
            </h1>
            <span className='text-3xl block mt-3 text-gray-900'>
              ${data?.product?.price}
            </span>
            <p className='text-base my-6 text-gray-700'>
              {data?.product?.description}
            </p>
            <div className='flex items-center justify-between space-x-2'>
              <CustomButton title='Talk to seller'/>
              <IconButton onClick={onFavClick} isLiked={data?.isLiked}>
                {data?.isLiked ? (
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
            {data?.relatedProducts?.map((product) => (
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

export default ItemDetail;
