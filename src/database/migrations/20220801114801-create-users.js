'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allownull: false,
      },
      name: {
        type: Sequelize.STRING,
        allownull: false,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allownull: false,
      },
      password_hash: {
        type: Sequelize.STRING,
        allownull: false,
      },
      created_at: {
        type: Sequelize.STRING,
        allownull: false,
      },
      updated_at: {
        type: Sequelize.STRING,
        allownull: false,
      },
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('users')
  },
}
