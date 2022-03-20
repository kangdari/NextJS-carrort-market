import type { NextPage } from 'next';
import { LayoutAnimation } from 'react-native';
import ChatListItem from '@components/ChatListItem';
import Layout from '@components/layout';

const Chats: NextPage = () => {
  return (
    // 마지막 컴포넌트 보더 제거
    // 1. last modifier 사용 last:border-b-0
    // 2. divided 클래스 사용 => 형재 요소가 있으면 보더 추가
    <Layout title='채팅' hasTabBar>
      <div className='py-10 divide-y-[1px]'>
        {[1, 1, 1, 1, 1, 1].map((_, i) => (
          <ChatListItem key={i} />
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
