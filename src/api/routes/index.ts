import { Router } from 'express';
import UserRoutes from './User.routes';

const router = Router();

router.use('/admin', UserRoutes);

export default router;
