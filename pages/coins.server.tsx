// Server Component
import {Suspense} from 'react';

const cache: any = {};

function fetchData(url: string) {
  if (!cache[url]) {
    // throw fetch(url)
    //   .then(r => r.json())
    //   .then(json => cache[url] = json);
    throw Promise.all([
      fetch(url)
        .then(r => r.json())
        .then(json => cache[url] = json),
      new Promise(resolve => setTimeout(resolve, Math.round(Math.random() * 10000)))
    ]);

  }
  return cache[url];
}

function Coin({id, name, symbol}: any) {
  const {quotes: {USD: {price}}} = fetchData(`https://api.coinpaprika.com/v1/tickers/${id}`);
  console.log(price);

  return (
    <li key={id}>{name} / {symbol}: ${price}</li>
  );
}

// 서버에서 렌더링한 컴포넌트
function List() {
  // 서버에서 api 호출
  const coins = fetchData('https://api.coinpaprika.com/v1/coins');

  return (
    <div>
      <h4>List is done</h4>
      <ul>
        {coins.slice(0, 7).map((coin: any) =>
          // <Coin key={coin.id} {...coin}/>
          <Suspense key={coin.id} fallback={`Coin ${coin.name} is loading...`}>
            <Coin {...coin}/>
          </Suspense>
        )}
      </ul>
    </div>

  );
}

export default function CoinsServer() {
  return (
    <div>
      <h1>Welcome to RSC</h1>
      <Suspense fallback="Rendering in the server...">
        <List/>
      </Suspense>
    </div>
  );
}

export const config =
  {
    runtime: 'edge',
  }
;
