import React from 'react';
import Link from 'next/link';

interface SimilarItemProps {
  id: number;
  name: string;
  price: number;
}

const SimilarItem = ({ id, name, price }: SimilarItemProps) => {
  return (
    <Link href={`/products/${id}`}>
      <a>
        <div className='cursor-pointer'>
          <div className='h-56 w-full mb-4 bg-slate-400' />
          <h3 className='text-gray-700 -mb-1'>{name}</h3>
          <span className='text-sm font-medium text-gray-900'>${price}</span>
        </div>
      </a>
    </Link>
  );
};

export default SimilarItem;
