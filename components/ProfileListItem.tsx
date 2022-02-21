import React from 'react';
import assets from '../assets/icon';

interface ProfileListItemProps {}

const ProfileListItem = ({}: ProfileListItemProps) => {
  return (
    <div className='flex px-4  border-b pb-4 cursor-pointer justify-between'>
      <div className='flex space-x-4'>
        {/* todo change to img */}
        <div className='w-20 h-20 bg-gray-400 rounded-md' />
        <div className='pt-2 flex flex-col'>
          <h3 className='text-sm font-medium text-gray-900'>New iPhone 14</h3>
          <span className='text-xs text-gray-400'>Black</span>
          <span className='font-medium mt-1 text-gray-900'>$95</span>
        </div>
      </div>
      <div className='flex space-x-2 items-end justify-end'>
        <div className='flex space-x-0.5 items-center text-sm text-gray-600'>
          {assets.heart}
          <span>1</span>
        </div>
        <div className='flex space-x-0.5 items-center text-sm text-gray-600'>
          {assets.comment}
          <span>1</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileListItem;
