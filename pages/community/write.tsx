import type {NextPage} from 'next';

const Write: NextPage = () => {
  return (
    <form className='px-4 py-10'>
        <textarea
          className='mt-1 shadow-sm w-full focus:ring-orange-500 focus:border-orange-500 rounded-md border-gray-300 resize-none'
          rows={4}
          placeholder='Ask a question!'
        />
      <button
        className='w-full mt-2 text-white bg-orange-500 hover:bg-orange-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none '>
        Submit
      </button>
    </form>
  );
};

export default Write;
