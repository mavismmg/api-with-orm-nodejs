'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Enrolls extends Model {
    static associate(models) {
      Enrolls.belongsTo(models.People, {
        foreignKey: "padawan_id"
      });
      Enrolls.belongsTo(models.Grades, {
        foreignKey: "grade_id"
      });
    }
  }
  Enrolls.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Enrolls',
  });
  return Enrolls;
};