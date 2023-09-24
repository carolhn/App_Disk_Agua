'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [
      {
        product_name: 'CAIXA DE COPO 200ML',
        description: '48 UNIDADES',
      },
      {
        product_name: 'AGUA 510 ML SEM GÁS',
        description: '12 UNIDADES',
      },
      {
        product_name: 'AGUA 510 ML COM GÁS',
        description: '12 UNIDADES',
      },
      {
        product_name: 'AGUA 1500 ML SEM GÁS',
        description: '12 UNIDADES',
      },
      {
        product_name: 'AGUA 1500 ML COM GÁS',
        description: '12 UNIDADES',
      },
      {
        product_name: 'AGUA 5 LITROS',
        description: '4 UNIDADES',
      },
      {
        product_name: 'AGUA 20 LITROS',
        description: '1 UNIDADE',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  }
};
