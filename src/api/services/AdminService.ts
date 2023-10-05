import { IAdmin, IAdminService, NewAdmin } from '../interfaces/IAdmin';
import Users from '../../database/models/Users';
import { createHash } from '../../utils/authentication/crypto';

export default class AdminService implements IAdminService {

  async getUserByEmail(email: string): Promise<IAdmin | null> {
    const user = await Users.findOne({
      where: { email },
      attributes: { exclude: ['password'] },
    });
    return user ? user.get() : null;
  };

  async registerNewUser(newUser: NewAdmin): Promise<{ type: number; message: string }> {
    try {
      const existingUser = await this.getUserByEmail(newUser.email);

      if (existingUser) {
        return { type: 409, message: 'Usuário já existe no banco de dados' };
      }

      const passwordHash = createHash(newUser.password);

      const createNewUser = await Users.create({
        name: newUser.name,
        email: newUser.email,
        password: passwordHash,
        role: newUser.role,
      });

      if (createNewUser) {
        return { type: 201, message: 'Usuário criado' };
      } else {
        throw new Error('Erro ao criar usuário');
      }
    } catch (error) {
      return { type: 500, message: 'Erro interno do servidor' };
    }
  }

  async getUserAll(): Promise<IAdmin[]> {
    const users = await Users.findAll();
    return users;
  };

async deleteUser(ids: number): Promise<{ type: number; message: string }> {
  try {
    const user = await this.getUserByEmail(String(ids));
    if (!user) {
      return { type: 404, message: 'Usuário não encontrado' };
    }

    const deleteUser = await Users.destroy({ where: { id: ids } });

      if (!deleteUser) {
        throw new Error('Erro ao deletar usuário');
      } else {
        return { type: 200, message: 'Usuário deletado' };
      }
    } catch (error) {
      return { type: 500, message: 'Erro interno do servidor' };
    }
  }
}