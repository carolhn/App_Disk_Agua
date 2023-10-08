import { IRequest } from "@api/interfaces/Users/IForgotPassword";
import UserService from "./UserService";
import UserTokenService from "./UserTokenService";
import AppError from "@utils/errors/AppError";

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
}
