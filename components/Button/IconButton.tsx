import { cls } from '@libs/client/utils';
import React from 'react';

interface IconButtonProps {
  onClick: () => void;
  isLiked?: boolean;
  children: React.ReactNode;
}

const IconButton = ({
  onClick,
  isLiked = false,
  children,
}: IconButtonProps) => {
  return (
    <button
      className={cls(
        'p-3 rounded-md items-center justify-center hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400',
        isLiked
          ? 'text-red-500  hover:text-red-600'
          : 'text-gray-400  hover:text-gray-500'
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
