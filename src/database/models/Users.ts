import { Model, DataTypes } from "sequelize";
import db from "./index";

class User extends Model {
    declare id: number;
    declare name: string;
    declare email: string;
    declare password: string;
    declare role: string;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
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
    modelName: 'users',
    timestamps: false,
  }
);

export default User;
