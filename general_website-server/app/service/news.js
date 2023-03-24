const NewsModel = require('../model/news')

const NewsService = {
  getNewsList: async (params) => {
    NewsModel.find(params)
  },
  createList: async () => {
   return NewsModel.create({
      title:'第一张测试图',
      img: 'http://rqthp68he.hn-bkt.clouddn.com/yuanshen/ys-main_bg.jpeg',
      type: 'news'
    })
  }
}

module.exports = NewsService