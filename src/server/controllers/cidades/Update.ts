import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { validation } from '../../shared/middleware';
import { ICidades } from '../../database/models';

interface IQeryProps {
  page?: number;
  limit?: number;
  fillter?: string;
}

interface IParamProps {
  id?: number;
}
interface IBodyProps extends Omit<ICidades, 'id'> {}
export const updateByIdValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      nome: yup.string().required().min(3),
    })
  ),
  params: getSchema<IParamProps>(
    yup.object().shape({
      id: yup.number().integer().moreThan(0),
    })
  ),
}));

export const UpdateById = async (
  req: Request<{}, {}, {}, IQeryProps>,
  res: Response
) => {
  console.log(req.params);
  console.log(req.body);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado');
};
