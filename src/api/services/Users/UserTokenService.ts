import UserToken from '@database/models/UserToken';
import { IUserToken } from '../../interfaces/Users/IUserToken';

export default class UserTokenService implements IUserToken {

  async findByToken(token: string): Promise<UserToken | null> {
    const userToken = await UserToken.findOne({
      where: { token },
    });
    return userToken;
  }

  async generateToken(userId: number): Promise<UserToken> {
    const userToken = await UserToken.create({
      userId,
    });

    return userToken;
  }

  async save(userToken: UserToken): Promise<UserToken> {
    await userToken.save();
    return userToken;
  }
}
