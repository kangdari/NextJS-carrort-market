import type { NextPage } from 'next';
import CustomButton from '@components/Button/CustomButton';
import Input from '@components/input';
import Layout from '@components/layout';

const EditProfile: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className='py-10 px-4 space-y-4'>
        <div className='flex items-center space-x-3'>
          <div className='w-14 h-14 rounded-full bg-slate-400' />
          <label
            htmlFor='picture'
            className='cursor-pointer py-2 px-3 border-gray-300 border rounded-md shadow-sm text-sm font-medium focus:ring-2 fucos:ring-offset-2 focus:ring-orange-500 text-gray-700'
          >
            Change
            <input id='picture' type='file' hidden accept='image/*' />
          </label>
        </div>

        <div className='space-y-1'>
          <Input label='Email Address' name='email' type='email' required />
        </div>

        <div className='space-y-1'>
          <Input label='Phone number' name='phone' type='phone' required />
        </div>

        <CustomButton title='Edit Profile' full size='small' />
      </div>
    </Layout>
  );
};

export default EditProfile;
