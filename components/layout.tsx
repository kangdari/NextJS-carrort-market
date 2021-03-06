import Link from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';
import {cls} from '@libs/client/utils';
import Head from 'next/head';

interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
  seoTitle?: string;
}

export default function Layout({
                                 title,
                                 canGoBack,
                                 hasTabBar,
                                 seoTitle,
                                 children,
                               }: LayoutProps) {
  const route = useRouter();
  const onClick = () => {
    route.back();
  };

  return (
    <div>
      <Head>
        <title>{seoTitle || 'Carrot Market'} </title>
      </Head>
      <div
        className={cls(
          !canGoBack ? 'justify-center' : '',
          'bg-white w-full max-w-xl px-4 text-lg font-medium py-3 fixed text-gray-800 border-b top-0 flex items-center'
        )}
      >
        {canGoBack && (
          <button onClick={onClick}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </button>
        )}
        {title &&
        <div className={'w-full text-center'}>
          <span>{title}</span>
        </div>}
      </div>
      <div className={cls('pt-12', hasTabBar ? 'pb-24' : '')}>{children}</div>
      {hasTabBar && (
        <nav
          className=' bg-white max-w-xl text-gray-700 border-t fixed bottom-0 w-full px-10 pb-5 pt-3 flex justify-between text-xs'>
          <Link href='/'>
            <a
              className={cls(
                'cursor-pointer flex flex-col items-center space-y-2',
                route.pathname === '/' ? 'text-orange-500' : ''
              )}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                />
              </svg>
              <span>???</span>
            </a>
          </Link>

          <Link href='/community'>
            <a
              className={cls(
                'cursor-pointer flex flex-col items-center space-y-2',
                route.pathname === '/community' ? 'text-orange-500' : ''
              )}
            >
              {' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
                />
              </svg>
              <span>????????????</span>
            </a>
          </Link>

          <Link href='/chats'>
            <a
              className={cls(
                'cursor-pointer flex flex-col items-center space-y-2',
                route.pathname === '/chats' ? 'text-orange-500' : ''
              )}
            >
              {' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                />
              </svg>
              <span>??????</span>
            </a>
          </Link>

          <Link href='/streams'>
            <a
              className={cls(
                'cursor-pointer flex flex-col items-center space-y-2',
                route.pathname === '/streams' ? 'text-orange-500' : ''
              )}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 13a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
              <span>?????????</span>
            </a>
          </Link>

          <Link href='/profile'>
            <a
              className={cls(
                'cursor-pointer flex flex-col items-center space-y-2',
                route.pathname === '/profile' ? 'text-orange-500' : ''
              )}
            >
              {' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                />
              </svg>
              <span>?????? ??????</span>
            </a>
          </Link>
        </nav>
      )}
    </div>
  );
}
