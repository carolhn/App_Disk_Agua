import UserToken from "@database/models/UserToken";

export interface IRequest {
    email: string;
}

export interface IForgotPassword {
    findByToken(token: string): Promise<UserToken | null>;
    generateToken(userId: number): Promise<UserToken>;
    save(userToken: UserToken): Promise<UserToken>;
    resetPassword({ email }: IRequest): Promise<void>;
}