import { NextApiRequest, NextApiResponse } from 'next';
import client from '@libs/server/client';
import withHandler from '@libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email } = req.body;
  const payload = phone ? { phone: +phone } : { email };

  // const user = await client.user.upsert({
  //   where: {
  //     ...payload,
  //   },
  //   create: {
  //     name: 'Anonymous',
  //     ...payload,
  //   },
  //   update: {},
  // });

  const token = await client.token.create({
    data: {
      payload: '23',
      user: {
        connectOrCreate: {
          // 유저가 있으면 token 연결
          // 유저가 없으면 유저를 생성하고 token 연결
          where: {
            ...payload,
          },
          create: {
            name: 'Anonymous',
            ...payload,
          },
        },
      },
    },
  });

  /*   if (email) {
    // email를 가진 유저 찾기
    user = await client.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      console.log('find user!!');
    }

    // 유저 x => 유저 생성
    if (!user) {
      console.log('Did not find. Will create');
      user = await client.user.create({
        data: {
          name: 'Anonymous',
          email,
        },
      });
    }
    console.log(user);
  }

  if (phone) {
    // phone 가진 유저 찾기
    user = await client.user.findUnique({
      where: {
        phone: +phone,
      },
    });

    if (user) {
      console.log('find user!!');
    }

    // 유저 x => 유저 생성
    if (!user) {
      console.log('Did not find. Will create');
      user = await client.user.create({
        data: {
          name: 'Anonymous',
          phone: 
        },
      });
    }
    console.log(user);
  } */

  return res.status(200).end();
}

export default withHandler('POST', handler);
