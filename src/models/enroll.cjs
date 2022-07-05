'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Enroll extends Model {
    static associate(models) {
      Enroll.belongsTo(models.People, {
        foreignKey: "padawan_id"
      });
      Enroll.belongsTo(models.Class, {
        foreignKey: "class_id"
      });
    }
  }
  Enroll.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Enroll',
  });
  return Enroll;
};