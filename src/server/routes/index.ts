import { Router } from 'express';
import { CidadesController } from '../controllers';

const router = Router();

router.post(
  '/cidades',
  CidadesController.validationBody,
  CidadesController.Create
);

router.get(
  '/cidades',
  CidadesController.getAllValidation,
  CidadesController.GetAll
);

router.get(
  '/cidades/:id',
  CidadesController.getByIdValidation,
  CidadesController.GetById
);

router.put(
  '/cidades/:id',
  CidadesController.updateByIdValidation,
  CidadesController.UpdateById
);

router.delete(
  '/cidades/:id',
  CidadesController.deleteValidation,
  CidadesController.DeleteById
);
export { router };
