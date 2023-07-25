import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

interface ICidade {
  nome: string;
}
interface IQeryProps {
  page?: number;
  limit?: number;
  fillter?: string;
}
export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado');
};

export const getAll = async (
  req: Request<{}, {}, {}, IQeryProps>,
  res: Response
) => {
  console.log(req.query);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado');
};

export const getById = async (
  req: Request<{}, {}, {}, IQeryProps>,
  res: Response
) => {
  console.log(req.query);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado');
};

export const updateById = async (
  req: Request<{}, {}, {}, IQeryProps>,
  res: Response
) => {
  console.log(req.params);
  console.log(req.body);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado');
};

export const deleteById = async (
  req: Request<{}, {}, {}, IQeryProps>,
  res: Response
) => {
  console.log(req.params);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado');
};
