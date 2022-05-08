import type {NextPage} from 'next';
import Layout from '@components/layout';
import useSWR from 'swr';
import {useRouter} from 'next/router';
import {Stream} from '@prisma/client';
import Message from '@components/Message';
import {useForm} from 'react-hook-form';
import useMutation from '@libs/client/useMutation';
import useUser from '@libs/client/useUser';

interface StreamMessage {
  message: string;
  id: number;
  user: {
    avatar?: string;
    id: number;
  }
}

interface StreamWithMessage extends Stream {
  messages: StreamMessage[]
}

interface StreamResponse {
  ok: true;
  stream: StreamWithMessage
}

interface MessageForm {
  message: string;
}

const LiveDetail: NextPage = () => {
  const {user} = useUser();
  const router = useRouter();
  const {register, handleSubmit, reset} = useForm<MessageForm>();
  const {data, mutate} = useSWR<StreamResponse>(
    router.query?.id ?
      `/api/streams/${router.query?.id}` : null, {
      refreshInterval: 1000
    });
  const [sendMessage, {data: sendMessageData, loading}] = useMutation(`/api/streams/${router.query?.id}/messages`);

  const onValid = (form: MessageForm) => {
    if (loading) return;
    reset();
    // 백 api를 호출하기 전에 캐시 데이터를 업데이트
    // ui만 먼저 업데이트하여 채팅 메시지가 보내진 것처러 보이게 함
    mutate(prev => prev && ({
      ...prev, stream: {
        ...prev.stream,
        messages: [...prev.stream.messages, {
          id: Date.now(),
          message: form.message,
          user: {
            ...user
          }
        }]
      }
    }), false);
    sendMessage(form);
  };


  return (
    <Layout canGoBack>
      <div className='py-10 px-4 space-y-4'>
        <div className='pt-4'>
          <div className='w-full bg-slate-300 aspect-video shadow-sm'/>
          <h3 className=' text-gray-800  font-semibold text-2xl mt-2'>
            {data?.stream?.name}
          </h3>
          <span className="text-2xl block mt-3 text-gray-900">
            ${data?.stream?.price}
          </span>
          <p className=" my-6 text-gray-700">{data?.stream?.description}</p>
        </div>

        <div className='py-10  h-[50vh] overflow-y-scroll space-y-4 '>
          {data?.stream?.messages?.map(message =>
            <Message
              key={message.id}
              message={message.message}
              reversed={user.id === message?.user?.id}
            />
          )}
        </div>

        <div className='fixed py-2 px-4 bg-white bottom-0 inset-x-0'>
          <form onSubmit={handleSubmit(onValid)} className='flex items-center relative'>
            <input
              {...register('message', {required: true})}
              type='text'
              className='shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none focus:border-orange-500'
            />
            <div className='absolute inset-y-0 flex py-1.5 pr-1.5 right-0'>
              <button
                className='flex cursor-pointer items-center bg-orange-500 hover:bg-orange-600 rounded-full px-3 text-sm text-white focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none'>
                &rarr;
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default LiveDetail;
