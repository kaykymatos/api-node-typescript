import * as yup from 'yup';
import { validation } from '../../shared/middleware';

interface ICidade {
  nome: string;
}
interface IQeryProps {
  page?: number;
  limit?: number;
  fillter?: string;
}
interface IParamProps {
  id?: number;
}
interface IBodyeProps {
  nome: string;
}
export const validationBody = validation((getSchema) => ({
  body: getSchema<ICidade>(
    yup.object().shape({
      nome: yup.string().required().min(3),
    })
  ),
}));

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQeryProps>(
    yup.object().shape({
      page: yup.number().optional().moreThan(0),
      limit: yup.number().optional().moreThan(0),
      fillter: yup.string().optional(),
    })
  ),
}));

export const getByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamProps>(
    yup.object().shape({
      id: yup.number().integer().optional().moreThan(0),
    })
  ),
}));

export const updateByIdValidation = validation((getSchema) => ({
  body: getSchema<IBodyeProps>(
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

export const deleteValidation = validation((getSchema) => ({
  params: getSchema<IParamProps>(
    yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
    })
  ),
}));
