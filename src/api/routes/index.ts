import { Router } from 'express';
import UserRoutes from './User.routes';
import AuthRoutes from './Auth.routes';

const router = Router();

router.use('/admin', UserRoutes);
router.use('/auth', AuthRoutes);

export default router;
