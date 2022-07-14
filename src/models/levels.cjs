'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Levels extends Model {
    static associate(models) {
      Levels.hasMany(models.Grades, {
        foreignKey: "level_id"
      });
    }
  }
  Levels.init({
    level_desc: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Levels',
  });
  return Levels;
};