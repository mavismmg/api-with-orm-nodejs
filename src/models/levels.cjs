'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Level extends Model {
    static associate(models) {
      Level.hasMany(models.Class, {
        foreignKey: "level_id"
      });
    }
  }
  Level.init({
    level_desc: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Level',
  });
  return Level;
};