import UserToken from '@database/models/UserToken';

export interface IUserToken {
    findByToken(token: string): Promise<UserToken | null>;
    generateToken(userId: number): Promise<UserToken>;
    save(userToken: UserToken): Promise<UserToken>;
}