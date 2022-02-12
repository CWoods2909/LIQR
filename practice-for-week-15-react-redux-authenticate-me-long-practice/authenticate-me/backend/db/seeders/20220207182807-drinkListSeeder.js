'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('DrinkLists', [
      {userId:1, cocktailId:4,createdAt: new Date(), updatedAt: new Date()},
      {userId:1, cocktailId:3,createdAt: new Date(), updatedAt: new Date()},
      {userId:1, cocktailId:2,createdAt: new Date(), updatedAt: new Date()},
      {userId:1, cocktailId:1,createdAt: new Date(), updatedAt: new Date()},
      {userId:1, cocktailId:5,createdAt: new Date(), updatedAt: new Date()},
      {userId:1, cocktailId:7,createdAt: new Date(), updatedAt: new Date()},
      {userId:1, cocktailId:8,createdAt: new Date(), updatedAt: new Date()},
      {userId:1, cocktailId:9,createdAt: new Date(), updatedAt: new Date()},
      {userId:1, cocktailId:10,createdAt: new Date(), updatedAt: new Date()},
      {userId:1, cocktailId:11,createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('DrinkLists', null, {});
  }
};
