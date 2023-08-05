import * as cidadesCreateController from './cidades/Create';
import * as cidadesDeleteController from './cidades/Delete';
import * as cidadesGetAllController from './cidades/GetAll';
import * as cidadesGetByIdontroller from './cidades/GetById';
import * as cidadesUpdateController from './cidades/Update';

import * as pessoasCreateController from './pessoas/Create';
import * as pessoasDeleteController from './pessoas/Delete';
import * as pessoasGetAllController from './pessoas/GetAll';
import * as pessoasGetByIdontroller from './pessoas/GetById';
import * as pessoasUpdateController from './pessoas/Update';

export const CidadesController = {
  ...cidadesCreateController,
  ...cidadesDeleteController,
  ...cidadesGetAllController,
  ...cidadesGetByIdontroller,
  ...cidadesUpdateController,
};

export const PessoasController = {
  ...pessoasCreateController,
  ...pessoasDeleteController,
  ...pessoasGetAllController,
  ...pessoasGetByIdontroller,
  ...pessoasUpdateController,
};