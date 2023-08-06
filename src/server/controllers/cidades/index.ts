import * as create from './Create';
import * as deleteById from './Delete';
import * as getAll from './GetAll';
import * as getById from './GetById';
import * as updateById from './Update';

export const CidadesController = {
  ...create,
  ...deleteById,
  ...getAll,
  ...getById,
  ...updateById
};
