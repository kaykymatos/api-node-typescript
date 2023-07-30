import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { validation } from '../../shared/middleware';
import * as yup from 'yup';
import { ICidades } from '../../database/models';

interface IBodyProps extends Omit<ICidades, 'id'> {}
export const validationBody = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      nome: yup.string().required().min(3),
    })
  ),
}));
export const Create = async (
  req: Request<{}, {}, IBodyProps>,
  res: Response
) => {
  console.log(req.body);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado');
};
