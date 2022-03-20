import type { NextPage } from 'next';
import CustomButton from '@components/Button/CustomButton';
import Layout from '@components/layout';
import TextArea from '@components/TextArea';

const Write: NextPage = () => {
  return (
    <Layout canGoBack>
      <form className='px-4 py-10'>
        <TextArea rows={4} placeholder='Answer this question!' />
        <CustomButton title='Submit' full size='small' className='mt-2' />
      </form>
    </Layout>
  );
};

export default Write;
