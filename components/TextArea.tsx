import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface TextAreaProps {
  name?: string;
  label?: string;
  register?: UseFormRegisterReturn;
  [key: string]: any;
}

const TextArea = ({ name, label, register, ...rest }: TextAreaProps) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className='block mb-2 text-sm font-medium text-gray-700'
        >
          {label}
        </label>
      )}
      <textarea
        className='mt-1 shadow-sm w-full focus:ring-orange-500 focus:border-orange-500 rounded-md border-gray-300 resize-none'
        rows={4}
        {...register}
        {...rest}
      />
    </div>
  );
};

export default TextArea;
