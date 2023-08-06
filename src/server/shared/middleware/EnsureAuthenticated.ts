import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

export const EnsureAuthenticated: RequestHandler = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ error: { default: 'Nai autenticado!' } });
  }
  const [type, token] = authorization.split(' ');

  if (type !== 'Bearer' || !token) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ error: { default: 'Nai autenticado!' } });
  }

  if (token !== 'teste.teste.teste') {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ error: { default: 'Nai autenticado!' } });
  }
  return next();
};
