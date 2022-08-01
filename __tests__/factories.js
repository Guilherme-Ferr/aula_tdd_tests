const { factory } = require('factory-girl')
const { User } = require('../src/app/models')

factory.define('User', User, {
  name: 'meuname',
  email: 'meuname@email.com',
  password: '321987',
})

module.exports = factory
