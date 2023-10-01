import { IAdmin, NewAdmin } from '../interfaces/IAdmin';
import Users from '../../database/models/Users';
import { createHash } from '../../utils/authentication/crypto';

const getUserByEmail = async (email: string): Promise<IAdmin | null> => {
  const user = await Users.findOne({
    where: { email },
    attributes: { exclude: ['password'] },
  });
  return user ? user.get() : null;
};

const registerNewUser = async (newUser: NewAdmin): Promise<{ type: number; message: string }> => {
  try {
    const existingUser = await getUserByEmail(newUser.email);

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
};

export { getUserByEmail, registerNewUser };
