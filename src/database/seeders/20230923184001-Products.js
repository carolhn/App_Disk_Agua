'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [
      {
        id: 1001,
        product_name: 'CAIXA DE COPO 200 ML',
        description: '48 UNIDADES',
      },
      {
        id: 1002,
        product_name: 'AGUA 510 ML SEM GÁS',
        description: '12 UNIDADES',
      },
      {
        id: 1003,
        product_name: 'AGUA 510 ML COM GÁS',
        description: '12 UNIDADES',
      },
      {
        id: 1004,
        product_name: 'AGUA 1500 ML SEM GÁS',
        description: '12 UNIDADES',
      },
      {
        id: 1005,
        product_name: 'AGUA 1500 ML COM GÁS',
        description: '12 UNIDADES',
      },
      {
        id: 1006,
        product_name: 'AGUA 5 LITROS',
        description: '4 UNIDADES',
      },
      {
        id: 1007,
        product_name: 'AGUA 20 LITROS',
        description: '1 UNIDADE',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  }
};
