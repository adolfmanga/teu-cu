import express from 'express';
import * as UsersFunction from '../controllers/usersController.js';


const router = express.Router();

router.get('/buscarClientes', UsersFunction.getAllClientes);

//função para deletar clientes 
router.delete('/deletarCliente/:id', UsersFunction.deletarCliente);

router.get('/buscarDogwalkers',UsersFunction.getAllDogwalkers);

router.delete('/deletarDogwalker/:id', UsersFunction.deletarDogwalker);


export default router;