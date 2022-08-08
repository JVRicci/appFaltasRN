'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class catequistas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  catequistas.init({
    idContato: DataTypes.BIGINT,
    idEndereco: DataTypes.BIGINT,
    idTurma: DataTypes.BIGINT,
    nome: DataTypes.STRING,
    nascimento: DataTypes.DATE,
    ativo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'catequistas',
    createdAt:'created_at',
    updatedAt:'updated_at',
  });
  return catequistas;
};