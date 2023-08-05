import * as create from './Create';
import * as count from './Count';
import * as deleteById from './DeleteById';
import * as getAll from './GetAll';
import * as getById from './GetById';
import * as update from './UpdateById';

export const PessoasProvider = {
  ...create,
  ...count,
  ...deleteById,
  ...getAll,
  ...getById,
  ...update,
};
