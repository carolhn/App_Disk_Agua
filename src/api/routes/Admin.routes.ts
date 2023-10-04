import { Router } from 'express';
import AdminController from '../controllers/AdminController';
import { validateUserData } from '../middlewares/validateNewUser';

class AdminRoutes {
  public router: Router = Router();
  private adminController: AdminController = new AdminController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/register', validateUserData, this.adminController.registerNewUser);
    this.router.get('/users', this.adminController.getUserAll);
  }
}

export default new AdminRoutes().router;
