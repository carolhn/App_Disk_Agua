import { Request, Response } from 'express';
import AdminService from '../services/AdminService';
import { NewAdmin } from '../interfaces/IAdmin';

export default class AdminController {
  
async registerNewUser(req: Request, res: Response) {
  try {
    const { name, email, password, role } = req.body;

    const newUser: NewAdmin = { name, email, password, role };
    const adminService = new AdminService();
    const registerUser = await adminService.registerNewUser(newUser);

   if (registerUser.type) {
        return res.status(registerUser.type).json({ message: registerUser.message });
      }
    } catch (error) {
      console.error('Erro no registro de usuário:', error);
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }

  async getUserAll(req: Request, res: Response) {
    try {
      const users = await new AdminService().getUserAll();
      return res.status(200).json({ users });
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }
}