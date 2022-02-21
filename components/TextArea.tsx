import React from 'react';

interface TextAreaProps {
  name?: string;
  label?: string;
  type?: 'text' | 'phone' | 'price' | 'email';
  [key: string]: any;
}

const TextArea = ({ name, label, ...rest }: TextAreaProps) => {
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
        {...rest}
      />
    </div>
  );
};

export default TextArea;
