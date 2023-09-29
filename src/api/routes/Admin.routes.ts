import { Router } from 'express';
import * as AdminController from '../controllers/AdminController';
import { validateUserData } from '../middlewares/validateNewUser';

const adminRoutes = Router();

adminRoutes.post('/register', validateUserData, AdminController.registerNewUser);

export default adminRoutes;
