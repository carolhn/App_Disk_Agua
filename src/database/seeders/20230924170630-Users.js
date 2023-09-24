'use strict';

const role = ['administrator', 'employee'];

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'Kitkat Admin',
        email: 'kitkat@disk.com',
        password: 'kitkat12',
        role: role[0],
      },
      {
        id: 2,
        name: 'Biscoito Azul',
        email: 'biscoito@disk.com',
        password: 'biscoito12',
        role: role[1],
      },
      {
        id: 3,
        name:'ze do palete',
        role: role[1],
        email:'ze@disk.com',
        password: 'zepalete12',
     },
    ], {});
    },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
