'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    static associate(models) {
      Class.hasMany(models.Enroll, {
        foreignKey: "class_id"
      });
      Class.belongsTo(models.People, {
        foreignKey: "jedimaster_id"
      });
      Class.belongsTo(models.Level, {
        foreignKey: "level_id"
      });
    }
  }
 Class.init({
    join_date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Class',
  });
  return Class;
};