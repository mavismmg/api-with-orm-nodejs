'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    static associate(models) {
      People.hasMany(models.Grades, {
        foreignKey: "jedimaster_id"
      });
      People.hasMany(models.Enrolls, {
        foreignKey: "padawan_id"
      });
    }
  }
  People.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        validationFunction: function(data) {
          if (data.length < 3) {
            throw new Error("name should have at least 3 characters.");
          }
        }
      }
    },
    active: DataTypes.BOOLEAN,
    email: { 
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "data of type email is invalid."
        }
      }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    defaultScope: {
      where: { active: true }
    },
    scopes: {
      all: { where: {}},
      //etc: { constraint: value }, ...
    },
    modelName: 'People',
  });
  return People;
};