import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { validation } from '../../shared/middleware';

interface IQeryProps {
  page?: number;
  limit?: number;
  fillter?: string;
}

interface IParamProps {
  id?: number;
}
export const getByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamProps>(
    yup.object().shape({
      id: yup.number().integer().optional().moreThan(0),
    })
  ),
}));
export const GetById = async (
  req: Request<{}, {}, {}, IQeryProps>,
  res: Response
) => {
  console.log(req.query);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado');
};