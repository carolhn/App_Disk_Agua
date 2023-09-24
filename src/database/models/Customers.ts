import { Model, DataTypes } from "sequelize";
import db from "./index";

class Customers extends Model {
    declare id: number;
    declare name: string;
    declare phone: Number;
    declare type: string;
    declare cpf_cnpj: Number;
    declare address: string;
}

Customers.init({
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
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf_cnpj: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
    underscored: true,
    sequelize: db,
    modelName: 'customers',
    timestamps: false,
  }
);

export default Customers;
