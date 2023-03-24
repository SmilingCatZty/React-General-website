const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserTypes = {
  username: {
    type:String
  },
  password: {
    type:String
  }
}

const userModal = mongoose.modal('user', new schema(UserTypes))
module.exports = userModal