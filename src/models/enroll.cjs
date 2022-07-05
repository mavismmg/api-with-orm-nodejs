'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enroll extends Model {
    static associate(models) {
      Enroll.belongsTo(models.Rank, {
        foreignKey: "rank_id"
      });
      Enroll.belongsTo(models.People, {
        foreignKey: "padawan_id"
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