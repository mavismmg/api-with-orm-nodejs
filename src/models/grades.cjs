'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Grades extends Model {
    static associate(models) {
      Grades.hasMany(models.Enrolls, {
        foreignKey: "grade_id"
      });
      Grades.belongsTo(models.People, {
        foreignKey: "jedimaster_id"
      });
      Grades.belongsTo(models.Levels, {
        foreignKey: "level_id"
      });
    }
  }
 Grades.init({
    join_date: DataTypes.DATEONLY
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Grades',
  });
  return Grades;
};