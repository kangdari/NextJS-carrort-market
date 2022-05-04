import { NextApiRequest, NextApiResponse } from 'next';

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

type method = 'GET' | 'POST' | 'DELETE';

interface ConfigType {
  methods: method[];
  handler: (req: NextApiRequest, res: NextApiResponse) => void;
  isPrivate?: boolean; // 로그인 상태
}

// HOF
// 하나 이상의 함수를 인자로 받고
// 함수를 반환하는 함수
export default function withHandler(config: ConfigType) {
  const { methods, handler, isPrivate = true } = config;

  return async function (
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<any> {
    if (req.method && !methods.includes(req.method as any)) {
      return res.status(405).end();
    }

    if (isPrivate && !req.session.user) {
      return res.status(401).json({ ok: false, error: 'please login...' });
    }

    try {
      await handler(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };
}
