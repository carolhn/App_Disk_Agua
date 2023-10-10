import UserService from "./UserService";
import UserTokenService from "./UserTokenService";
import AppError from "@utils/errors/AppError";

interface IRequest {
  email: string;
}

export default class SendForgotPasswordEmailService {

  async execute({ email }: IRequest): Promise<void> {
    const userModel = new UserService();
    const userTokenModel = new UserTokenService();

    const user = await userModel.findByEmail(email);

    if(!user) {
      throw new AppError('Usuário não encontrado');
    }

    const token = await userTokenModel.generateToken(user.id.toString());
    }  
}