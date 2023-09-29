import { Router } from 'express';
import adminRoutes from './Admin.routes';

const router = Router();

router.use('/admin', adminRoutes);

export default router;
