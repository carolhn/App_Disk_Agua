import UserToken from '@database/models/UserToken';
import { v4 as uuidv4 } from 'uuid';

export default class UserTokenService {

  async findByToken(token: string): Promise<UserToken | null> {
    const userToken = await UserToken.findOne({
      where: { token },
    });
    return userToken;
  };

  async generateToken(user_id: string): Promise<{ token: string, userToken: UserToken }> {
    const token = uuidv4();

    const userToken = await UserToken.create({
      user_id: user_id,
      token: token,
    });

    return { token, userToken };
  };
};
