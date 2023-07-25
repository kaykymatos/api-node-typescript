import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CytiController } from '../controllers';
import { CidadesValidation } from '../validation';

const router = Router();

router.post(
  '/cidades',
  CidadesValidation.validationBody,
  CytiController.create
);

router.get(
  '/cidades',
  CidadesValidation.getAllValidation,
  CytiController.getAll
);

router.get(
  '/cidades/:id',
  CidadesValidation.getByIdValidation,
  CytiController.getById
);

router.put(
  '/cidades/:id',
  CidadesValidation.updateByIdValidation,
  CytiController.updateById
);

router.delete(
  '/cidades/:id',
  CidadesValidation.deleteValidation,
  CytiController.deleteById
);
export { router };
