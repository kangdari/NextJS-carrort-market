import type { NextPage } from 'next';
import { LayoutAnimation } from 'react-native';
import Layout from '@components/layout';
import ProfileListItem from '@components/ProfileListItem';

const Buy: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className='flex flex-col space-y-5 py-10'>
        {[1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <ProfileListItem />
        ))}
      </div>
    </Layout>
  );
};

export default Buy;
