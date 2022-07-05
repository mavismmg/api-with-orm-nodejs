'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Grades", [
      {
        join_date: "2022-02-01",
        level_id: 1,
        jedimaster_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        join_date: "2022-02-01",
        level_id: 2,
        jedimaster_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        join_date: "2022-02-01",
        level_id: 3,
        jedimaster_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        join_date: "2022-02-01",
        level_id: 4,
        jedimaster_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Grades', null, {});
  }
};
