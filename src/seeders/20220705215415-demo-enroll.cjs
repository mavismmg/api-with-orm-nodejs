'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Enrolls", [
      {
        status: "Active",
        padawan_id: 1,
        grade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "Non-Active",
        padawan_id: 2,
        grade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "Non-Active",
        padawan_id: 3,
        grade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "Active",
        padawan_id: 4,
        grade_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Enrolls', null, {});
  }
};