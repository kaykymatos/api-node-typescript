import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { validation } from '../../shared/middleware';
import { CidadesProvider } from '../../database/providers/cidades';

interface IQeryProps {
  id?: number;
  page?: number;
  limit?: number;
  fillter?: string;
}

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQeryProps>(
    yup.object().shape({
      page: yup.number().optional().moreThan(0),
      id: yup.number().integer().optional().default(0),
      limit: yup.number().optional().moreThan(0),
      fillter: yup.string().optional(),
    })
  ),
}));
export const GetAll = async (
  req: Request<{}, {}, {}, IQeryProps>,
  res: Response
) => {
  const result = await CidadesProvider.getAll(
    req.query.page || 1,
    req.query.limit || 7,
    req.query.fillter || '',
    Number(req.query.id)
  );
  const count = await CidadesProvider.count(req.query.fillter);

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: {
        default: result.message,
      },
    });
  } else if (count instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: {
        default: count.message,
      },
    });
  }
  res.setHeader('access-control-expose-headers', 'x-total-cout');
  res.setHeader('x-total-count', count);
  return res.status(StatusCodes.OK).json(result);
};
