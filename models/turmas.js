'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class turmas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  turmas.init({
    idCatequisa: DataTypes.BIGINT,
    diaencontro: DataTypes.STRING,
    formacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'turmas',
    createdAt:'created_at',
    updatedAt:'updated_at',
  });
  return turmas;
};