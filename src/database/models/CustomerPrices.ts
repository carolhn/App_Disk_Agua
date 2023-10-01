import { Model, DataTypes } from 'sequelize';
import db from './index';
import Customers from './Customers';
import Products from './Products';

class CustomerPrice extends Model {
    declare id: number;
    declare customerId: number;
    declare productId: number;
    declare price: number;
}

CustomerPrice.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(9,2),
    allowNull: false,
  },
}, {
    underscored: true,
    sequelize: db,
    modelName: 'customer_prices',
    timestamps: false,
  });

  CustomerPrice.belongsTo(Customers, { foreignKey: 'customer_id' as 'customer' });
  CustomerPrice.belongsTo(Products, { foreignKey: 'product_id' as 'product' });

export default CustomerPrice;
