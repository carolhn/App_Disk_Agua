import { Model, DataTypes } from 'sequelize';
import db from './index';

class UserToken extends Model {
  public id!: number;
  public token!: string;
  public user_id!: number;
}

UserToken.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  },
  {
    underscored: true,
    sequelize: db,
    tableName: 'user_tokens',
    timestamps: false,
    modelName: 'user_tokens',
  }
);

export default UserToken;
