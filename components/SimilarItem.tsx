import React from 'react';

interface SimilarItemProps {}

const SimilarItem = ({}: SimilarItemProps) => {
  return (
    <div className='cursor-pointer'>
      <div className='h-56 w-full mb-4 bg-slate-400' />
      <h3 className='text-gray-700 -mb-1'>Galaxy S60</h3>
      <span className='text-sm font-medium text-gray-900'>$6</span>
    </div>
  );
};

export default SimilarItem;
