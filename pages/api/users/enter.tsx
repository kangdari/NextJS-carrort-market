import twilio from 'twilio';
import mail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';
import client from '@libs/server/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';

mail.setApiKey(process.env.SEND_GRID_API_KEY!);

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;

  const user = phone ? { phone } : email ? { email } : null;
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

  if (phone) {
    // const message = await twilioClient.messages.create({
    //   messagingServiceSid: process.env.MESSAGING_SERVICE_ID,
    //   to: process.env.PHONE_NUM!,
    //   body: `your login token is ${payload}`,
    // });
  } else if (email) {
    // const email = await mail.send({
    //   from: 'ksh44820@naver.com',
    //   to: 'ksh44820@naver.com',
    //   subject: 'your carrot market Verification Email',
    //   text: `your token is ${payload}`,
    //   html: `<strong>your token is ${payload}</strong>`,
    // });
  }

  return res.json({
    ok: true,
  });
}

export default withHandler({
  method: 'POST',
  handler,
  isPrivate: false,
});
