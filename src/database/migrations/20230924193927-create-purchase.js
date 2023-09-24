'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('purchases', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      invoice_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      invoice_date: {
        type: Sequelize.DATE,
        allowNull: false,
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
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      unit_price: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      },
      total_price: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      },
      },{
          timestamps: false,

      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('purchases');
  }
};
