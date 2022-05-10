import Document, {Head, Html, Main, NextScript} from 'next/document';

// 서버에서 한 번만 실행
// 페이지를 렌더링하는데 사용하는 html 및 body를 업데이트 할 수 있음
class CustomDocument extends Document {
  render(): JSX.Element {
    console.log('DOCUMENT IS RUNNING');
    return (
      <Html lang="ko">
        <Head>
          {/*<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet"/>*/}
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital@1&display=swap" rel="stylesheet"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
