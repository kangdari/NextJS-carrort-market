import type {NextRequest, NextFetchEvent} from 'next/server';
import {NextResponse} from 'next/server';

// 페이지 로딩 전에 먼저 실행 됨
export function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (req.ua?.isBot) {
    return new Response('plz don\'t be a bot!!!');
  }
  //
  // if (!req.url.includes('/api')) {
  //   if (!req.url.includes('/enter') && !req.cookies.carrotSession) {
  //     // 유저가 없음
  //     return NextResponse.redirect('/enter');
  //   }
  // }
  // return NextResponse.json({ok: true});
}
