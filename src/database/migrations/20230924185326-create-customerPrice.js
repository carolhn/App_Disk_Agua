'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('customer_prices', {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: Sequelize.INTEGER,
    },
    customerId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      foreignKey: true,
      field: "customer_id",
      references: { model: 'customers', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    productId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      foreignKey: true,
      field: "product_id",
      references: { model: 'products', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    price: {
      type: Sequelize.DECIMAL(10,2),
      allowNull: false,
    },
    },{
        timestamps: false,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('customer_prices');
  }
};
