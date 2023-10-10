import { Router } from 'express';
import ForgotPasswordController from '@api/controllers/Users/ForgotPasswordController';
import validationEmail from '../middlewares/Users/ValidateEmail'

class PasswordRoutes {
  public router: Router = Router();
  private ForgotController = new ForgotPasswordController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/forgot', validationEmail, this.ForgotController.create);
  }
}

export default new PasswordRoutes().router;
