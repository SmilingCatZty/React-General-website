const UserService = require('../service/user')

const UserController = {
  login: async (req, res) => {
    const result = await UserService.login({ username, password })

    res.send({
      ActionType: 'OK',
      data: {
        username: result[0].username
      }
    })
  }
}

module.exports = UserController
