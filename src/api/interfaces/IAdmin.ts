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
  getUserByEmail(email: string): Promise<IAdmin | null>;
  registerNewUser(newUser: NewAdmin): Promise<{ type: number; message: string }>;
  getUserAll(): Promise<IAdmin[]>;
}