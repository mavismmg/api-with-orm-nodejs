'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Enroll", [
      {
        status: "Active",
        padawan_id: 1,
        class_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "Non-Active",
        padawan_id: 2,
        class_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "Non-Active",
        padawan_id: 3,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "Active",
        padawan_id: 4,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Enroll', null, {});
  }
};
