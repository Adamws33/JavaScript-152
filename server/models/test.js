'use strict';
module.exports = (sequelize, DataTypes) => {
  var test = sequelize.define('test', {
    testdata: DataTypes.STRING,
    firstName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return test;
};