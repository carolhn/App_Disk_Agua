import { Router } from 'express';
import UserRoutes from './User.routes';
import AuthRoutes from './Auth.routes';
import PasswordRoutes from './Password.routes';

const router = Router();

router.use('/admin', UserRoutes);
router.use('/auth', AuthRoutes);
router.use('/password', PasswordRoutes);

export default router;
