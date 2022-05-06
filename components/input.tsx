import React from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  name: string;
  label: string;
  type?: 'text' | 'phone' | 'price' | 'email' | 'number';
  register?: UseFormRegisterReturn;
  required?: boolean;
  [key: string]: any;
}

const Input = ({
  name,
  label,
  type = 'text',
  register,
  required,
  ...rest
}: InputProps) => {
  return (
    <div>
      <label
        htmlFor={name}
        className='block mb-2 text-sm font-medium text-gray-700'
      >
        {label}
      </label>
      {type === 'text' && (
        <input
          id={name}
          className='appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500'
          type={type}
          required={required}
          {...register}
          {...rest}
        />
      )}

      {type === 'number' && (
        <input
          id={name}
          className='appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500'
          type={type}
          required={required}
          {...register}
          {...rest}
        />
      )}

      {type === 'email' && (
        <input
          id={name}
          type={type}
          className='appearance-none w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500'
          required={required}
          {...register}
          {...rest}
        />
      )}

      {type === 'phone' && (
        <div className='flex rounded-md shadow-sm'>
          <span className='flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none'>
            +82
          </span>
          <input
            id={name}
            type={type}
            className='appearance-none w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500'
            required={required}
            {...register}
            {...rest}
          />
        </div>
      )}

      {type === 'price' && (
        <div className='relative flex items-center rounded-md shadow-sm'>
          <div className='absolute left-0 pl-3 flex items-center justify-center pointer-events-none'>
            <span className='text-gray-500 text-sm'>$</span>
          </div>
          <input
            id={name}
            type={type}
            className='pl-7 appearance-none w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500'
            required={required}
            {...register}
            {...rest}
          />
          <div className='absolute right-0 pr-3 flex items-center pointer-events-none '>
            <span className='text-gray-500'>USD</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Input;
