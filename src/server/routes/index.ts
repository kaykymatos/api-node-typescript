import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CytiController } from '../controllers';

const router = Router();

router.get('/', (req, res) => {
  return res.status(StatusCodes.OK).json();
});

router.post(
  '/cidades/create',
  CytiController.validationBody,
  CytiController.create
);

export { router };
