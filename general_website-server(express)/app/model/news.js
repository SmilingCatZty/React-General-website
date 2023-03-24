const mongoose = require('mongoose')
const schema = mongoose.Schema

const NewsTypes = {
  title: {
    type: String
  },
  img: {
    type: String,
    default: ''
  },
  type: {
    type:String,
    // type: 'latest' || 'news' || 'notice' || 'active',
    default: 'latest'
  }
}

const NewsModel = mongoose.model('news', new schema(NewsTypes))
module.exports = NewsModel
