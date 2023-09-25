import { DataTypes, Model } from "sequelize";
import { UserAttributes, IUsers } from "@database/types/Users";
import db from './index';

class Users extends Model<IUsers, UserAttributes> {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public role!: string;
}

Users.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  tableName: "users",
  timestamps: false,
});

export default Users;
