'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Templete extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Templete.init({
    name: DataTypes.STRING,
    html: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Templete',
  });
  return Templete;
};