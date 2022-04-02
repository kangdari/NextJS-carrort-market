import { NextApiRequest, NextApiResponse } from 'next';
import client from '@libs/server/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });

  const payload = Math.floor(10000 + Math.random() * 999999) + '';
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          // 유저가 있으면 token 연결
          // 유저가 없으면 유저를 생성하고 token 연결
          where: {
            ...user,
          },
          create: {
            name: 'Anonymous',
            ...user,
          },
        },
      },
    },
  });

  return res.json({
    ok: true,
  });
}

export default withHandler('POST', handler);
