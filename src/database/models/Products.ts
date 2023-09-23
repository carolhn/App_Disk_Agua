import { DataTypes, Model } from 'sequelize';
import db from './index';

class Products extends Model {
  declare id: number;
  declare name: string;
  declare price: number;
  declare description: string;
}

Products.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'products',
  timestamps: false,
});

export default Products;
