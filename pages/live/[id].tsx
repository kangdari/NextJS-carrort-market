import type { NextPage } from 'next';
import Layout from '@components/layout';

const LiveDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className='py-10 px-4 space-y-4'>
        <div className='pt-4'>
          <div className='w-full bg-slate-300 aspect-video shadow-sm' />
          <h3 className=' text-gray-800  font-semibold text-2xl mt-2'>
            Lets try beef!
          </h3>
        </div>

        <div className='py-10  h-[50vh] overflow-y-scroll space-y-4 '>
          <div className='flex items-start space-x-2'>
            <div className='w-8 h-8 rounded-full bg-slate-400' />
            <div className='w-1/2 text-sm text-gray-700 p-2 rounded-md border border-gray-00'>
              <p>Hi how much are you selling them for?</p>
            </div>
          </div>

          <div className='flex flex-row-reverse items-start space-x-2 space-x-reverse'>
            <div className='w-8 h-8 rounded-full bg-slate-400' />
            <div className='w-1/2 text-sm text-gray-700 p-2 rounded-md border border-gray-00'>
              <p>I want ￦20,000</p>
            </div>
          </div>

          <div className='flex items-start space-x-2'>
            <div className='w-8 h-8 rounded-full bg-slate-400' />
            <div className='w-1/2 text-sm text-gray-700 p-2 rounded-md border border-gray-00'>
              <p>Hi how much are you selling them for?</p>
            </div>
          </div>

          <div className='flex flex-row-reverse items-start space-x-2 space-x-reverse'>
            <div className='w-8 h-8 rounded-full bg-slate-400' />
            <div className='w-1/2 text-sm text-gray-700 p-2 rounded-md border border-gray-00'>
              <p>I want ￦20,000</p>
            </div>
          </div>

          <div className='flex items-start space-x-2'>
            <div className='w-8 h-8 rounded-full bg-slate-400' />
            <div className='w-1/2 text-sm text-gray-700 p-2 rounded-md border border-gray-00'>
              <p>Hi how much are you selling them for?</p>
            </div>
          </div>

          <div className='flex flex-row-reverse items-start space-x-2 space-x-reverse'>
            <div className='w-8 h-8 rounded-full bg-slate-400' />
            <div className='w-1/2 text-sm text-gray-700 p-2 rounded-md border border-gray-00'>
              <p>I want ￦20,000</p>
            </div>
          </div>

          <div className='flex items-start space-x-2'>
            <div className='w-8 h-8 rounded-full bg-slate-400' />
            <div className='w-1/2 text-sm text-gray-700 p-2 rounded-md border border-gray-00'>
              <p>Hi how much are you selling them for?</p>
            </div>
          </div>

          <div className='flex flex-row-reverse items-start space-x-2 space-x-reverse'>
            <div className='w-8 h-8 rounded-full bg-slate-400' />
            <div className='w-1/2 text-sm text-gray-700 p-2 rounded-md border border-gray-00'>
              <p>I want ￦20,000</p>
            </div>
          </div>

          <div className='flex items-start space-x-2'>
            <div className='w-8 h-8 rounded-full bg-slate-400' />
            <div className='w-1/2 text-sm text-gray-700 p-2 rounded-md border border-gray-00'>
              <p>Hi how much are you selling them for?</p>
            </div>
          </div>

          <div className='flex flex-row-reverse items-start space-x-2 space-x-reverse'>
            <div className='w-8 h-8 rounded-full bg-slate-400' />
            <div className='w-1/2 text-sm text-gray-700 p-2 rounded-md border border-gray-00'>
              <p>I want ￦20,000</p>
            </div>
          </div>
        </div>

        <div className='fixed py-2 px-4 bg-white bottom-0 inset-x-0'>
          <div className='flex items-center relative'>
            <input
              type='text'
              className='shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none focus:border-orange-500'
            />
            <div className='absolute inset-y-0 flex py-1.5 pr-1.5 right-0'>
              <button className='flex cursor-pointer items-center bg-orange-500 hover:bg-orange-600 rounded-full px-3 text-sm text-white focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none'>
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LiveDetail;
