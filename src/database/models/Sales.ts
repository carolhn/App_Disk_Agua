import { DataTypes, Model } from 'sequelize';
import db from './index';
import Products from './Products';

class Sales extends Model {
  declare id: Number;
  declare customer_id: Number;
  declare product_id: Number;
  declare quantity: Number;
  declare unit_price: Number;
  declare total_price: Number;
}

Sales.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  customer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  unit_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'sales',
  timestamps: false,
});

Sales.belongsTo(Products, { foreignKey: 'productId' as 'product' });

export default Sales;
