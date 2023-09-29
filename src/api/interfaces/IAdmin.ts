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
