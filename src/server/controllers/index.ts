import * as createController from './cidades/Create';
import * as deleteController from './cidades/Delete';
import * as getAllController from './cidades/GetAll';
import * as getByIdontroller from './cidades/GetById';
import * as updateController from './cidades/Update';

export const CidadesController = {
  ...createController,
  ...deleteController,
  ...getAllController,
  ...getByIdontroller,
  ...updateController,
};
