import {NextApiRequest, NextApiResponse} from 'next';
import withHandler, {ResponseType} from '@libs/server/withHandler';
import client from '@libs/server/client';
import {withApiSession} from '@libs/server/withSession';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {

  // user는 서버에 CloudFare url 요구 => 서버에서 cloudFare에 url을 요청 => cloudFare은 서버에 url을 전
  // => 유저에게 전달 => 파일 업로드
  const response = await (
    await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${process.env.CF_ID}/images/v1/direct_upload`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.CF_TOKEN}`,
        },
      }
    )
  ).json();

  console.log(response.result);
  // uploadURL은 유저에게 전달하고(1회용 30분 후 만료)
  // 서버는 id를 저장

  res.json({
    ok: true,
    ...response.result,
  });
}

export default withApiSession(
  withHandler({
    methods: ['GET'],
    handler,
  })
);
