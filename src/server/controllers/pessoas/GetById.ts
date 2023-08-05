import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { validation } from '../../shared/middleware';
import { CidadesProvider } from '../../database/providers/cidades';
import { PessoasProvider } from '../../database/providers/pessoas';

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
export const GetById = async (req: Request<IParamProps>, res: Response) => {
  if (!req.params.id) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: {
        default: 'O parametro "Id" precisa ser maior que 0!',
      },
    });
  }
  const result = await PessoasProvider.getById(req.params.id);
  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: {
        default: result.message,
      },
    });
  }

  return res.status(StatusCodes.OK).json(result);
};
