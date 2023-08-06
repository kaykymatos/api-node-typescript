import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { IUsuario } from '../../database/models';
import { UsuariosProvider } from '../../database/providers/usuarios';
import { validation } from '../../shared/middleware';

interface IBodyProps extends Omit<IUsuario, 'id' | 'nome'> {}
export const validationBodySignIn = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      email: yup.string().email().required().min(5),
      senha: yup.string().required().min(6),
    })
  ),
}));
export const signIn = async (
  req: Request<{}, {}, IBodyProps>,
  res: Response
) => {
  const { email, senha } = req.body;

  const result = await UsuariosProvider.getByEmail(email);
  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: {
        default: 'E-mail ou senha inválidos!',
      },
    });
  } else if (senha !== result.senha) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: {
        default: 'E-mail ou senha inválidos!',
      },
    });
  } else {
    return res
      .status(StatusCodes.OK)
      .json({ accessToken: 'teste.teste.teste' });
  }
};
