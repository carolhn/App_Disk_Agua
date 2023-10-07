import { Request, Response } from 'express';
import AuthenticationService from '../services/AuthService';

export default class AuthenticationController {
  
  async authUser(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      
      const authService = new AuthenticationService();
      const authenticatedUser = await authService.authUser({ email, password });
      
      return res.json(authenticatedUser);
    } catch (error) {
      return res.status(401).json({ error: 'Falha na autenticação' });
    }
  }
}
