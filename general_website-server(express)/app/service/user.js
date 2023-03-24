const userModel = require('../model/user')

const UserService = {
  login: async ({ username, password }) => {
    return userModel.find({ username, password })
  }
}

module.exports = UserService
