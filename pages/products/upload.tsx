import type { NextPage } from 'next';
import { useEffect } from 'react';
import CustomButton from '@components/Button/CustomButton';
import Input from '@components/input';
import TextArea from '@components/TextArea';
import { useForm } from 'react-hook-form';
import Layout from '@components/layout';
import useMutation from '@libs/client/useMutation';
import { useRouter } from 'next/router';
import { Product } from '@prisma/client';

interface UploadFormProps {
  name: string;
  price: number;
  description: string;
}

interface UploadProductMutation {
  ok: boolean;
  product: Product;
}

const Upload: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<UploadFormProps>();
  const [uploadProduct, { loading, data }] = useMutation<UploadProductMutation>(
    '/api/products'
  );

  const onValid = (data: UploadFormProps) => {
    if (loading) return;
    uploadProduct(data);
  };

  useEffect(() => {
    if (data?.ok) {
      console.log(data.product);
      router.push(`/products/${data.product.id}`);
    }
  }, [data, router]);

  return (
    <Layout canGoBack>
      <form className='px-4 py-16 space-y-5' onSubmit={handleSubmit(onValid)}>
        <div>
          <div>
            <label className='w-full text-gray-700 hover:text-orange-500 cursor-pointer hover:border-orange-500 flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md'>
              <svg
                className='h-12 w-12'
                stroke='currentColor'
                fill='none'
                viewBox='0 0 48 48'
                aria-hidden='true'
              >
                <path
                  d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <input type='file' className='hidden' />
            </label>
          </div>
        </div>
        <Input
          register={register('name', { required: true })} // useForm js validtion
          label='Name'
          type='text'
          name='name'
          required // html 적용
        />
        <Input
          register={register('price', { required: true })}
          label='Price'
          type='price'
          name='price'
          required
        />
        <TextArea
          register={register('description', { required: true })}
          label='Description'
          name='description'
          rows={4}
          required
        />
        <CustomButton title={loading ? 'loading...' : 'Upload product'} full />
      </form>
    </Layout>
  );
};

export default Upload;
