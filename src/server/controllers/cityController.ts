import { Request, Response } from 'express';

interface ICidade {
  nome: string;
}

export const create = (req: Request<{}, {}, ICidade>, res: Response) => {
  return res.send('create');
};
