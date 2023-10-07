import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UserController {
  
async createUser(req: Request, res: Response) {
  try {
    const { name, email, password, role } = req.body;

    const user = new UserService();
    const registerUser = await user.createUser({ name, email, password, role });

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
      const users = new UserService();
      const userAll = await users.findAll();
      return res.status(200).json(userAll);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      
      const adminService = new UserService();
      await adminService.deleteUser(Number(id));
      return res.status(200).json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }
}