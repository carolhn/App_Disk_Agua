import { IRequest, IRequestPassword } from "@api/interfaces/Users/IForgotPassword";
import UserService from "./UserService";
import UserTokenService from "./UserTokenService";
import AppError from "@utils/errors/AppError";
import { createHash } from "@utils/authentication/crypto";
import { isTokenExpired } from "@utils/authentication/token";

export default class ForgotPasswordEmailService {
    constructor(
        private userService = new UserService(),
        private userTokenService = new UserTokenService()
    ) { }

  async sendPasswordResetEmail({ email }: IRequest): Promise<void> {
    const user = await this.userService.findByEmail(email);
    console.log('-------------USER-------------', user);
    if(!user) {
        throw new AppError('Usuário não encontrado')
    }
    
    const userToken = await this.userTokenService.generateToken(user.id);
    console.log('--------------TOKEN------------', userToken);
    
  }

  async resetPassowordService({ token, password }: IRequestPassword): Promise<void> {
    const userToken = await this.userTokenService.findByToken(token);

    if(!userToken) {
        throw new AppError('Token não encontrado')
    }

    const user = await this.userService.findById(userToken.user_id);
    if(!user) {
        throw new AppError('Usuário não encontrado')
    }

    if (isTokenExpired(userToken.created_at, 2)) {
        throw new AppError('Token expirado')
    }

    user.password = password;

    const passwordHash = createHash(user.password);
  }
}
