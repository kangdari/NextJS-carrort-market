import React from 'react';

interface IconButtonProps {
  children: React.ReactNode;
}

const IconButton = ({ children }: IconButtonProps) => {
  return (
    <button className='p-3 rounded-md items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400'>
      {children}
    </button>
  );
};

export default IconButton;
