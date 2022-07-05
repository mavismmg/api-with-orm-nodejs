'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rank extends Model {
    static associate(models) {
     Rank.hasMany(models.Enroll, {
        foreignKey:  "rank_id"
      });
     Rank.belongsTo(models.People, {
        foreignKey: "jedimaster_id"
      });
     Rank.belongsTo(models.Levels, {
        foreignKey: "level_id"
      });
    }
  }
 Rank.init({
    join_date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Rank',
  });
  return Rank;
};