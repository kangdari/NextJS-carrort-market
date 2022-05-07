import type {NextPage} from 'next';
import CustomButton from '@components/Button/CustomButton';
import Layout from '@components/layout';
import TextArea from '@components/TextArea';
import {useForm} from 'react-hook-form';
import useMutation from '@libs/client/useMutation';
import {useEffect} from 'react';
import {Post} from '@prisma/client';
import {useRouter} from 'next/router';
import useCoords from '@libs/client/useCoords';

interface WriteForm {
  question: string;
}

interface WriteResponse {
  ok: boolean;
  post: Post
}

const Write: NextPage = () => {
  const router = useRouter();
  const {latitude, longitude} = useCoords();
  const {register, handleSubmit} = useForm<WriteForm>();
  const [post, {data, loading}] = useMutation<WriteResponse>('/api/posts');


  const onValid = (data: WriteForm) => {
    if (loading) return;
    post({
      ...data,
      latitude,
      longitude
    });
  };

  useEffect(() => {
    if (data && data.ok) {
      router.push(`/community/${data.post.id}`);
    }
  }, [data, router]);

  return (
    <Layout canGoBack title="Write Post">
      <form className='px-4 py-10' onSubmit={handleSubmit(onValid)}>
        <TextArea
          register={register('question', {required: true, minLength: 5})}
          rows={4} placeholder='Answer this question!'/>
        <CustomButton title={loading ? 'loading...' : 'Submit'} full size='small' className='mt-2'/>
      </form>
    </Layout>
  );
};

export default Write;
