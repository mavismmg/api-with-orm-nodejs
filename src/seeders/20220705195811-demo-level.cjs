'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Levels", [
      {
        level_desc: "Master",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        level_desc: "Padawan",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        level_desc: "Non-Jedi",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        level_desc: "Master",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Levels', null, {});
  }
};
