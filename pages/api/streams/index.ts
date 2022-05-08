import {NextApiRequest, NextApiResponse} from 'next';
import client from '@libs/server/client';
import withHandler, {ResponseType} from '@libs/server/withHandler';
import {withApiSession} from '@libs/server/withSession';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    body: {name, price, description},
    session: {user}
  } = req;


  if (req.method === 'POST') {
    const stream = await client.stream.create({
      data: {
        name,
        price,
        description,
        user: {
          connect: {
            id: user?.id
          }
        }
      }
    });
    res.json({
      ok: true,
      stream
    });
  }

  if (req.method === 'GET') {
    // todo pagination
    const streams = await client.stream.findMany({
      take: 10, // 10개만 요청,
      skip: 20
    });

    res.json({
      ok: true,
      streams
    });
  }


}


export default withApiSession(
  withHandler({
    methods: ['GET', 'POST'],
    handler,
  })
);
