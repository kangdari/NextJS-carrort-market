import type {NextPage} from 'next';
import Layout from '@components/layout';
import LiveListItem from '@components/LiveListItem';
import {useRouter} from 'next/router';
import {Stream} from '@prisma/client';
import useSWR from 'swr';

interface StreamsResponse {
  ok: boolean;
  streams: Stream[]
}

const Streams: NextPage = () => {

  const router = useRouter();
  const {data} = useSWR<StreamsResponse>('/api/streams?page=');
  return (
    <Layout title='라이브' hasTabBar>
      <div className='py-10 px-4 divide-y-2 space-y-4'>
        {data?.streams?.map((stream) => (
          <LiveListItem key={stream?.id} stream={stream}/>
        ))}
        <button
          onClick={() => router.push('/streams/create')}
          className='fixed bg-orange-400 hover:bg-orange-500 transition-colors bottom-24 right-5  rounded-full p-4 shadow-xl border-transparent text-white'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
            />
          </svg>
        </button>
      </div>
    </Layout>
  );
};

export default Streams;
