'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('catequistas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idContato: {
        type: Sequelize.BIGINT
      },
      idEndereco: {
        type: Sequelize.BIGINT
      },
      idTurma: {
        type: Sequelize.BIGINT
      },
      nome: {
        type: Sequelize.STRING
      },
      nascimento: {
        type: Sequelize.DATE
      },
      ativo: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('catequistas');
  }
};