import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { validation } from '../../shared/middleware';
import * as yup from 'yup';
import { ICidade, IPessoa } from '../../database/models';
import { CidadesProvider } from '../../database/providers/cidades';
import { PessoasProvider } from '../../database/providers/pessoas';

interface IBodyProps extends Omit<IPessoa, 'id'> {}
export const validationBody = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      nomeCompleto: yup.string().required().min(3),
      email: yup.string().email().required().min(3),
      cidadeId: yup.number().integer().moreThan(0).required(),
    })
  ),
}));
export const Create = async (
  req: Request<{}, {}, IBodyProps>,
  res: Response
) => {
  const result = await PessoasProvider.create(req.body);
  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: {
        default: result.message,
      },
    });
  }
  return res.status(StatusCodes.CREATED).json(result);
};
