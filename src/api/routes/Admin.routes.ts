import { Router } from 'express';
import * as AdminController from '../controllers/AdminController';

const adminRoutes = Router();

adminRoutes.post('/register', AdminController.registerNewUser);

export default adminRoutes;
