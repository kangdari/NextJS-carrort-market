import React from 'react';

interface ChatListItemProps {}

const ChatListItem = ({}: ChatListItemProps) => {
  return (
    <div className='flex px-4 py-3   cursor-pointer items-center space-x-3'>
      <div className='w-10 h-10 rounded-full bg-slate-300' />
      <div>
        <p className='font-medium text-gray-700'>Steve Jebs</p>
        <p className='text-sm font-medium text-gray-500'>
          See you later~ at 2pm
        </p>
      </div>
    </div>
  );
};

export default ChatListItem;
