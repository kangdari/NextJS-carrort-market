import {NextApiRequest, NextApiResponse} from 'next';
import client from '@libs/server/client';
import withHandler, {ResponseType} from '@libs/server/withHandler';
import {withApiSession} from '@libs/server/withSession';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {

  if (req.method === 'POST') {
    const {
      body: {question, latitude, longitude},
      session: {user},
    } = req;


    const post = await client.post.create({
      data: {
        question,
        // @ts-ignore
        latitude,
        longitude,
        user: {
          connect: {
            id: user?.id
          }
        }
      }
    });

    // /community 해당 url page 재 build
    await res.unstable_revalidate('/community');

    res.json({
      ok: true,
      post
    });
  }

  if (req.method === 'GET') {
    const {query: {latitude, longitude}} = req;
    const parsedLatitude = parseFloat(latitude.toString());
    const parsedLongitude = parseFloat(longitude.toString());
    const posts = await client.post.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            avatar: true
          }
        },
        _count: {
          select: {
            wonderings: true,
            answers: true,
          }
        }
      },
      where: {
        // @ts-ignore
        // todo 유저 설정 값
        latitude: {
          gte: parsedLatitude - 0.01,
          lte: parsedLatitude + 0.01,
        },
        longitude: {
          gte: parsedLongitude - 0.01,
          lte: parsedLongitude + 0.01,
        },
      },
    });
    res.json({
      ok: true,
      posts
    });
  }


}

// 146937

export default withApiSession(
  withHandler({
    methods: ['POST', 'GET'],
    handler,
  })
);
