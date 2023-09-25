import { Optional } from "sequelize";

export interface IUsers {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface UserAttributes extends Optional<IUsers, 'id'> {}
