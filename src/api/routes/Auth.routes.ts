import { Router } from 'express';
import AuthenticationController from '../controllers/Users/AuthController';
import validationAuth from '../middlewares/Users/ValidateAuth';

class AuthRoutes {
  public router: Router = Router();
  private authController: AuthenticationController = new AuthenticationController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/', validationAuth, this.authController.authUser);
  }
}

export default new AuthRoutes().router;
