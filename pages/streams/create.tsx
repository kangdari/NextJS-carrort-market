import type {NextPage} from 'next';
import Layout from '@components/layout';
import Input from '@components/input';
import {useForm} from 'react-hook-form';
import useMutation from '@libs/client/useMutation';
import {useEffect} from 'react';
import {useRouter} from 'next/router';
import {Stream} from '@prisma/client';
import TextArea from '@components/TextArea';
import CustomButton from '@components/Button/CustomButton';

interface CreateForm {
  name: string;
  price: string;
  description: string;
}

interface CreateResponse {
  ok: boolean;
  stream: Stream
}

const Create: NextPage = () => {
  const router = useRouter();
  const {register, handleSubmit} = useForm<CreateForm>();
  const [createStream, {data, loading}] = useMutation<CreateResponse>(`/api/streams`);



  const onValid = (form: CreateForm) => {
    createStream(form);
  };

  useEffect(() => {
    if (data && data.ok) {
      router.push(`/streams/${data?.stream?.id}`);
    }
  }, [data, router]);

  return (
    <Layout canGoBack title="Go Live">
      <form onSubmit={handleSubmit(onValid)} className=" space-y-4 py-10 px-4">
        <Input
          register={register('name', {required: true})}
          required
          label="Name"
          name="name"
          type="text"
        />
        <Input
          register={register('price', {required: true, valueAsNumber: true})}
          required
          label="Price"
          name="price"
          type="text"
          kind="price"
        />
        <TextArea
          register={register('description', {required: true})}
          name="description"
          label="Description"
        />
        <CustomButton
          full
          title={loading ? 'Loading...' : 'Go streams'}/>
      </form>
    </Layout>
  );
};


export default Create;
