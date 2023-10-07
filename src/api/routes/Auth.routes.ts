import { Router } from 'express';
import AuthenticationController from '../controllers/AuthController';
import validationAuth from '../middlewares/ValidateAuth';

class AuthRoutes {
  public router: Router = Router();
  private authController: AuthenticationController = new AuthenticationController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/',validationAuth, this.authController.authUser);
  }
}

export default new AuthRoutes().router;
