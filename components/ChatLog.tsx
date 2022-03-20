import React from 'react';
import { cls } from '../libs/client/utils';

interface ChatLogProps {
  direction?: 'left' | 'right';
  chat: string;
}

const ChatLog = ({ direction = 'left', chat }: ChatLogProps) => {
  return (
    <div
      className={cls(
        'flex items-start space-x-2',
        direction === 'right' ? 'flex-row-reverse space-x-reverse' : ''
      )}
    >
      <div className='w-8 h-8 rounded-full bg-slate-400' />
      <div className='w-1/2 text-sm text-gray-700 p-2 rounded-md border border-gray-00'>
        <p>{chat}</p>
      </div>
    </div>
  );
};

export default ChatLog;
