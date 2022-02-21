import React from 'react';

interface ListItemProps {}

const ListItem = ({}: ListItemProps) => {
  return (
    <div className='flex px-4 pt-4 first:pt-0 cursor-pointer justify-between'>
      <div className='flex space-x-4'>
        <div className='w-20 h-20 bg-gray-400 rounded-md' />
        <div className='pt-2 flex flex-col'>
          <h3 className='text-sm font-medium text-gray-900'>New iPhone 14</h3>
          <span className='text-xs text-gray-400'>Black</span>
          <span className='font-medium mt-1 text-gray-900'>$95</span>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
