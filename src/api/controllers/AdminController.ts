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

  async findAll(req: Request, res: Response) {
    try {
      const users = new AdminService();
      const userAll = await users.findAll();
      return res.status(200).json({ userAll });
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      
      const adminService = new AdminService();
      await adminService.deleteUser(Number(id));
      return res.status(200).json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }
}