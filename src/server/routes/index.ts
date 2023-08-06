import { Router } from 'express';
import { CidadesController} from '../controllers/cidades';
import { PessoasController} from '../controllers/pessoas';
import { UsuariosController} from '../controllers/usuarios';
import { EnsureAuthenticated } from '../shared/middleware';

const router = Router();


//-----------------------------Cidades-----------------------------
router.post('/cidades',EnsureAuthenticated,CidadesController.validationBody,CidadesController.Create);
router.get('/cidades',EnsureAuthenticated,CidadesController.getAllValidation,CidadesController.GetAll);
router.get('/cidades/:id',EnsureAuthenticated,CidadesController.getByIdValidation,CidadesController.GetById);
router.put('/cidades/:id',EnsureAuthenticated,CidadesController.updateByIdValidation,CidadesController.UpdateById);
router.delete('/cidades/:id',EnsureAuthenticated,CidadesController.deleteValidation,CidadesController.DeleteById);

//-----------------------------Pessoas-----------------------------
router.post('/pessoas',EnsureAuthenticated,PessoasController.validationBody,PessoasController.Create);
router.get('/pessoas',EnsureAuthenticated,PessoasController.getAllValidation,PessoasController.GetAll);
router.get('/pessoas/:id',EnsureAuthenticated,PessoasController.getByIdValidation,PessoasController.GetById);
router.put('/pessoas/:id',EnsureAuthenticated,PessoasController.updateByIdValidation,PessoasController.UpdateById);
router.delete('/pessoas/:id',EnsureAuthenticated,PessoasController.deleteValidation,PessoasController.DeleteById);

//-----------------------------Usuario-----------------------------
router.post('/cadastrar',UsuariosController.validationBodySignUp,UsuariosController.signUp);
router.post('/entrar',UsuariosController.validationBodySignIn,UsuariosController.signIn);

export { router };
