import type { NextPage } from 'next';

const Chats: NextPage = () => {
  return (
    // 마지막 컴포넌트 보더 제거
    // 1. last modifier 사용 last:border-b-0
    // 2. divided 클래스 사용 => 형재 요소가 있으면 보더 추가

    <div className='py-10 divide-y-[1px]'>
      {[1, 1, 1, 1, 1, 1].map((_, i) => (
        <div
          key={i}
          className='flex px-4 py-3   cursor-pointer items-center space-x-3'
        >
          <div className='w-10 h-10 rounded-full bg-slate-300' />
          <div>
            <p className='font-medium text-gray-700'>Steve Jebs</p>
            <p className='text-sm font-medium text-gray-500'>
              See you later~ at 2pm
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
