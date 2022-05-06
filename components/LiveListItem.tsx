import React from 'react';

interface LiveListItemProps {}

const LiveListItem = ({}: LiveListItemProps) => {
  return (
    <div className='pt-4'>
      <div className='w-full bg-slate-300 aspect-video shadow-sm' />
      <h3 className=' text-gray-700 text-lg mt-2'>beef!</h3>
    </div>
  );
};

export default LiveListItem;
