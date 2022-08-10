'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class catequizandos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  catequizandos.init({
    idTurma:DataTypes.BIGINT,
    nome:DataTypes.STRING,
    nascimento:DataTypes.DATE,
    faltas:DataTypes.INTEGER,
    ativo:DataTypes.STRING,
    turma:DataTypes.STRING,
    faltaEncontro:DataTypes.INTEGER,
    faltaMissa:DataTypes.INTEGER


  }, {
    sequelize,
    modelName: 'catequizandos',
    createdAt:'created_at',
    updatedAt:'updated_at',
  });
  return catequizandos;
};