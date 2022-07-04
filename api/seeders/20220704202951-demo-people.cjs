'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert("People", [
    {
      name: "Luke Skywalker",
      active: 1,
      email: "luckeskywalker@mail.com",
      role: "student",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Anakin Skywalker",
      active: 0,
      email: "anakinskywalker@mail.com",
      role: "teacher",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Obi Wan",
      active: 0,
      email: "obiwan@mail.com",
      role: "teacher",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Leia Organa",
      active: 0,
      email: "leia@mail.com",
      role: "student",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
