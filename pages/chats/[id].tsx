import type { NextPage } from 'next';
import ChatLog from '../../components/ChatLog';

const ChatDetail: NextPage = () => {
  return (
    <div className='py-10 px-4 space-y-4'>
      <ChatLog chat='Hi how much are you selling them for?' />

      <ChatLog direction='right' chat='Hi how much are you selling them for?' />

      <ChatLog chat='Hi how much are you selling them for?' />

      <ChatLog direction='right' chat='Hi how much are you selling them for?' />

      <ChatLog chat='Hi how much are you selling them for?' />

      <ChatLog direction='right' chat='Hi how much are you selling them for?' />

      <ChatLog chat='Hi how much are you selling them for?' />

      <ChatLog direction='right' chat='Hi how much are you selling them for?' />

      <ChatLog chat='Hi how much are you selling them for?' />

      <ChatLog direction='right' chat='Hi how much are you selling them for?' />

      <ChatLog chat='Hi how much are you selling them for?' />

      <ChatLog direction='right' chat='Hi how much are you selling them for?' />

      <div className='fixed w-full mx-auto max-w-md bottom-2 inset-x-0'>
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
  );
};

export default ChatDetail;
