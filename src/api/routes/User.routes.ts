import { Router } from 'express';
import UserController from '../controllers/Users/UserController';
import { validateUserData } from '../middlewares/Users/ValidateUser';
import isAuthenticated from '@api/middlewares/Users/isAuthenticated';

class UserRoutes {
  public router: Router = Router();
  private userController: UserController = new UserController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/register', validateUserData, this.userController.createUser);
    this.router.get('/users', isAuthenticated ,this.userController.findAll);
    this.router.delete('/users/:id', this.userController.deleteUser);
  }
}

export default new UserRoutes().router;