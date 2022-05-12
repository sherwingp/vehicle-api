'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('vehicles', [{
     make: 'YAMAHA',
     model: 'VMX1700 V-MAX',
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
    make: 'UD',
    model: '1800',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    make: 'BMW',
    model: 'HP2 Sport',
    createdAt: new Date(),
    updatedAt: new Date()
   }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('vehicles', null, {});
  }
};
