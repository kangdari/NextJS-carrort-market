import React from 'react';

interface ProfileButtonProps {
  title: string;
  icon: React.ReactNode;
}

const ProfileButton = ({ title, icon }: ProfileButtonProps) => {
  return (
    <div className='flex flex-col items-center cursor-pointer'>
      <div className='w-14 h-14 text-white bg-orange-500 rounded-full flex items-center justify-center'>
        {icon}
      </div>
      <span className='text-sm mt-2 font-medium text-gray-700'>{title}</span>
    </div>
  );
};

export default ProfileButton;
