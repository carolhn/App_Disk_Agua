import { Model, DataTypes } from 'sequelize';
import db from './index';

class Users extends Model {
  id!: number;
  name!: string;
  email!: string;
  password!: string;
  role!: 'administrator' | 'employee';
}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: 'users',
    timestamps: false,
    modelName: 'Users',
  }
);

export default Users;