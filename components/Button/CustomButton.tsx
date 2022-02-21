import React from 'react';
import { cls } from '../../libs/utils';

interface CustomButtonProps {
  title: string;
  size?: 'small' | 'large';
  full?: boolean;
  className?: string;
}

const CustomButton = ({
  title,
  size = 'small',
  full,
  className,
}: CustomButtonProps) => {
  return (
    <button
      className={cls(
        `flex-1 bg-orange-500 text-white py-3 rounded-md focus:ring-2 focus:ring-offset-2  focus:outline-none focus:ring-orange-600 shadow-md font-medium hover:bg-orange-600`,
        full ? 'w-full' : '',
        size === 'small' ? 'py-2 px-4 text-sm shadow-md ' : '',
        `${className}`
      )}
    >
      {title}
    </button>
  );
};

export default CustomButton;
