import { Model, DataTypes } from 'sequelize';
import db from './index';
import Users from './Users';

class UserToken extends Model {
  id!: number;
  token!: string;
  userId!: number;
  created_at!: Date;
  updated_at!: Date;
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
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
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

UserToken.belongsTo(Users, { foreignKey: 'user_id' });

export default UserToken;
