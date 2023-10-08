import Users from '../../../database/models/Users';
import { hashToCompare } from '../../../utils/authentication/crypto';
import { IAuth } from '../../interfaces/Users/IAuth';
import { generateToken } from '../../../utils/authentication/token';
import { IResponse } from '../../interfaces/Users/IAuth';
import { IAuthService } from '../../interfaces/Users/IAuth';

export default class AuthenticationService implements IAuthService {

  async findByEmail(email: string): Promise<Users | null> {
    try {
      const user = await Users.findOne({ where: { email } });
      return user;
    } catch (error) {
      throw new Error('Erro ao buscar usuário por e-mail');
    }
  }

 async authUser({ email, password }: IAuth): Promise<IResponse> {
    try {
      const user = await this.findByEmail(email);

      if (!user) {
        throw new Error('Usuário com e-mail inválido');
      }

      const isPasswordValid = hashToCompare(password, user.password);
      
      if(!isPasswordValid) {
        throw new Error('Senha inválida');
      }

      const token = generateToken({ id: user.id });
      

      return { user, token };
    } catch (error) {
      throw new Error('Erro na autenticação');
    }
  }
}