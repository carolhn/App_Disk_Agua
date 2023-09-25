import { DataTypes, Model } from "sequelize";
import db from './index';

class Users extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;
  declare role: string;
}

Users.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
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
}, {
  underscored: true,
  sequelize: db,
  tableName: 'users',
  timestamps: false,
});

export default Users;
