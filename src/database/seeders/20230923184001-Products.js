'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [
      {
        name: 'Caixa de Copo 200ml',
        price: 1.00,
        description: 'Com 48 unidades',
      },
      {
        name: 'Água 510ml com gás',
        price: 1.00,
        description: 'Com 12 unidades',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  }
};
