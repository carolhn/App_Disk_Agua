import Users from '../../database/models/Users';

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