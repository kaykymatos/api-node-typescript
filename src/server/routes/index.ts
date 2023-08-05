import { Router } from 'express';
import { CidadesController, PessoasController } from '../controllers';

const router = Router();


//-----------------------------Cidades-----------------------------
router.post('/cidades',CidadesController.validationBody,CidadesController.Create);
router.get('/cidades',CidadesController.getAllValidation,CidadesController.GetAll);
router.get('/cidades/:id',CidadesController.getByIdValidation,CidadesController.GetById);
router.put('/cidades/:id',CidadesController.updateByIdValidation,CidadesController.UpdateById);
router.delete('/cidades/:id',CidadesController.deleteValidation,CidadesController.DeleteById);

//-----------------------------Pessoas-----------------------------
router.post('/pessoas',PessoasController.validationBody,PessoasController.Create);
router.get('/pessoas',PessoasController.getAllValidation,PessoasController.GetAll);
router.get('/pessoas/:id',PessoasController.getByIdValidation,PessoasController.GetById);
router.put('/pessoas/:id',PessoasController.updateByIdValidation,PessoasController.UpdateById);
router.delete('/pessoas/:id',PessoasController.deleteValidation,PessoasController.DeleteById);

export { router };
