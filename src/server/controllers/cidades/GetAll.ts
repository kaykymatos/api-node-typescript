import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { validation } from '../../shared/middleware';

interface IQeryProps {
  page?: number;
  limit?: number;
  fillter?: string;
}

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQeryProps>(
    yup.object().shape({
      page: yup.number().optional().moreThan(0),
      limit: yup.number().optional().moreThan(0),
      fillter: yup.string().optional(),
    })
  ),
}));
export const GetAll = async (
  req: Request<{}, {}, {}, IQeryProps>,
  res: Response
) => {
  console.log(req.query);
  res.setHeader('access-control-expose-headers', 'x-total-cout');
  res.setHeader('x-total-cout', 1);
  return res.status(StatusCodes.OK).json({ id: 1, nome: 'Caxias do sul' });
};
