import Users from "@database/models/Users";

export interface IUser {
  id?: number;
  name: string;
  email: string;
  password: string;
  role: 'administrator' | 'employee';
}

export interface NewUser {
  name: string;
  email: string;
  password: string;
  role: 'administrator' | 'employee';
}

export interface IUserService {
  findByEmail(email: string): Promise<Users | null>;
  createUser(newUser: NewUser): Promise<{ type: number; message: string }>;
  findAll(): Promise<IUser[]>;
}