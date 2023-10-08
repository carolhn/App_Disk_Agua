import Users from '../../../database/models/Users';

export interface IAuth {
    email: string;
    password: string;
}

export interface IToken {
    id: number;
}

export interface IResponse {
    user: Users;
    token: string;
}

export interface IAuthService {
    findByEmail(email: string): Promise<Users | null>;
    authUser({ email, password }: IAuth): Promise<IResponse>;
}