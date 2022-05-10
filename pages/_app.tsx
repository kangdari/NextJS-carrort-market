import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {SWRConfig} from 'swr';
import Script from 'next/script';

function MyApp({Component, pageProps}: AppProps) {
  console.log('APP IS RUNNING');
  return (
    <SWRConfig
      value={{
        // refreshInterval: 2000,
        fetcher: (url: string) =>
          fetch(url).then((responses) => responses.json()),
      }}
    >
      <div className='w-full max-w-xl mx-auto'>
        <Component {...pageProps} />
      </div>
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        // strategy="lazyOnload"
      />
      {/* beforeInteractive: 페이지를 다 불러온 후 상호작용 전 스크립트를 로드 */}
      {/* afterInteractive(default): 페이지를 먼저 다 불러온 후 스크립트를 로 */}
      {/* lazyOnload:  */}

      {/* GA도 페북처럼 연결 */}
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        onLoad={() => {
          window.fbAsyncInit = function () {
            FB.init({
              appId: 'your-app-id',
              autoLogAppEvents: true,
              xfbml: true,
              version: 'v13.0',
            });
          };
        }}
      />
    </SWRConfig>
  );
}

export default MyApp;
