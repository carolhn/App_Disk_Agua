import { DataTypes, Model } from 'sequelize';
import db from './index';
import Products from './Products';

class Purchase extends Model {
  declare id: number;
  declare invoice_number: String;
  declare purchase_date: Date;
  declare productId: Number;
  declare quantity: Number;
  declare unit_price: Number;
  declare total_price: Number;
}

Purchase.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  invoice_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  purchase_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  unit_price: {
    type: DataTypes.DECIMAL(9,2),
    allowNull: false,
  },
  total_price: {
    type: DataTypes.DECIMAL(9,2),
    allowNull: false,
  },
}, {
    underscored: true,
    sequelize: db,
    modelName: 'purchases',
    timestamps: false,
  });

  Purchase.belongsTo(Products, { foreignKey: 'product_id' as 'product' });

export default Purchase;
