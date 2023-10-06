import Users from "@database/models/Users";

export interface IAdmin {
  id?: number;
  name: string;
  email: string;
  password: string;
  role: 'administrator' | 'employee';
}

export interface NewAdmin {
  name: string;
  email: string;
  password: string;
  role: 'administrator' | 'employee';
}

export interface IAdminService {
  findByEmail(email: string): Promise<Users | null>;
  registerNewUser(newUser: NewAdmin): Promise<{ type: number; message: string }>;
  findAll(): Promise<IAdmin[]>;
}