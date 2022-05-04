import type { NextPage } from 'next';

// tailwind css => 모바일 우선 적용

const Home: NextPage = () => {
  return (
    // <div className="bg-slate-400 py-10 px-5 flex flex-col space-y-5">
    <div className='dark bg-slate-400 xl:place-content-center py-20 px-20 grid gap-10 lg:grid-cols-2 xl:grid-cols-3 min-h-screen'>
      <h1 className='text-8xl'>Hello</h1>
      {/*  JIT (just in time) 컴파일러 - 실시간으로 코드를 감시하면서 필요한 클래스를 생성함 */}
      <h1 className="text-[200px] text-[#d2d3d2] bg-[url('/vercel.svg')] bg-cover">
        Hello
      </h1>
      {/* <details className="select-none open:text-white open:bg-indigo-400">
        <summary className="cursor-pointer">What is my favorite food?</summary>
        <span className="selection:bg-indigo-500 selection:text-white">meat</span>
      </details> */}

      {/* <input type="file" className="file:cursor-pointer file:hover:text-purple-400 file:hover:bg-white file:bover:border-purple-400 file:hover:border-2 file:transition-colors file:border-0 file:rounded-md file:px-5 file:text-white file:bg-purple-400"/>
      <p className="first-letter:text-7xl first-letter:hover:text-purple-400">Hello</p>

      <form className="flex flex-col space-y-2 p-5">
        <input 
          type="text"
          required
          placeholder="Username"
          className="border p-1 peer border-gray-400 rounded-xl"
        />
        <span className="hidden peer-invalid:block peer-invalid:text-red-500">This input is invalid</span>
        <span className="hidden peer-valid:block peer-valid:text-teal-500">Awsome Username</span>

        
        <input type="submit" value="login" className="bg-white"/>
      </form> */}

      {/* <form className="flex flex-col space-y-2 bg-blue-200 p-5">
        <input type="text" required placeholder="username" className="required:bg-yellow-500 invalid:bg-red-400 valid:bg-teal-200"/>
        <input type="password" required placeholder="password"/>
        <input type="submit" value="login" className="bg-white"/>
      </form> */}

      <div
        className='bg-white dark:bg-black flex flex-col justify-between 
      sm:bg-red-400 sm:hover:bg-red-600 md:bg-teal-400 lg:bg-indigo-400 xl:bg-purple-400 2xl:bg-pink-400 
      p-6 rounded-3xl shadow-xl'
      >
        <span className='font-bold dark:text-white text-3xl'>Select Item</span>
        {/* <ul>
          {[1,2,3,4].map((i) => 
            <div className="flex justify-between my-2 odd:bg-blue-400 even:bg-yellow-200">
              <span className="font-semibold text-gray-500">Grey Chair</span>
              <span>$19</span>
            </div>
          )}
        </ul>
          
        {["a", "b", "c", ""].map((c, i) => 
          <li key={i} className="bg-red-500 py-2 empty:hidden list-none">{c}</li>)
        } */}

        <div>
          <div className='flex justify-between my-2 '>
            <span className='font-semibold text-gray-500 dark:text-gray-100 '>
              Grey Chair
            </span>
            <span>$19</span>
          </div>
          <div className='flex justify-between my-2 '>
            <span className='font-semibold text-gray-500 dark:text-gray-100 '>
              Grey Chair
            </span>
            <span>$19</span>
          </div>
        </div>

        <div className='mt-2 pt-2 border-t-2 border-dashed flex justify-between'>
          <span className='font-semibold'>Total</span>
          <span>$99</span>
        </div>
        <div
          className='mt-5 bg-blue-500 dark:bg-black dark:border-white dark:border text-white p-3 
          text-center rounded-xl w-1/2 mx-auto
          cursor-pointer
          dark:hover:bg-white
          hover:bg-teal-500 hover:text-black
          active:bg-yellow-500
          focus:bg-red-500
          '
        >
          Checkout
        </div>
      </div>

      <div className='bg-white overflow-hidden rounded-3xl shadow-2xl group'>
        <div className='landscape:bg-yellow-400 portrait:bg-indigo-800 p-6 pb-14 xl:pb-44'>
          <span className='text-white text-2xl'>Profile</span>
        </div>
        <div className='rounded-3xl relative -top-5 bg-white p-6'>
          <div className='flex relative -top-16 items-end justify-between'>
            <div className='flex flex-col items-center'>
              <span className='text-sm text-gray-500'>Orders</span>
              <span className='font-medium'>340</span>
            </div>
            {/* avartar */}
            <div className='h-24 w-24 bg-red-400 rounded-full group-hover:bg-red-300' />
            <div className='flex flex-col items-center'>
              <span className='text-sm text-gray-500'>Spent</span>
              <span className='font-medium'>$2,400</span>
            </div>
          </div>
          <div className='relative flex flex-col items-center -mt-10 -mb-5'>
            <span className='text-lg font-medium'>Tony Molloy</span>
            <span className='text-sm text-gray-500'>Seoul, KOREA</span>
          </div>
        </div>
      </div>

      <div className='bg-white p-6 rounded-3xl shadow-2xl lg:col-span-2 xl:col-span-1'>
        {/* header */}
        <div className='flex mb-5 justify-between items-center'>
          <span>👈</span>
          <div className='space-x-3'>
            <span>⭐️ 4.9</span>
            <span className='shadow-xl p-2 rounded-md'>🌝</span>
          </div>
        </div>

        <div className='bg-zinc-400 h-72 mb-5' />

        <div className='flex flex-col'>
          <span className='font-medium text-xl'>Swoon Lounge</span>
          <span className='text-xs text-gray-500'>Chair</span>
        </div>

        <div className='mt-3 mb-5 flex justify-between items-center'>
          <div className='space-x-2'>
            <button className='w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition' />
            <button className='w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition' />
            <button className='w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition' />
          </div>

          <div className='flex items-center space-x-5'>
            <button className=' rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8  text-xl text-gray-500'>
              -
            </button>
            <span>1</span>
            <button className=' rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8  text-xl text-gray-500'>
              +
            </button>
          </div>
        </div>

        <div className='flex justify-between items-center'>
          <span className='text-2xl font-medium'>$450</span>
          <button className='bg-blue-500 text-white py-2 px-10 rounded-lg text-xs'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
