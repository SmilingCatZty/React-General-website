const NewsService = require('../service/news')

const NewsController = {
  get: async params => {
    console.log('1233211234321');

    const res = await NewsService.getNewsList(params)
    res.send({
      ActionType: 'OK',
      data: {
        res
      }
    })
  },
  create: async () => {
    console.log('1233211234321');

    const res = await NewsService.createList()
    console.log('res',res);
  }
}

module.exports = NewsController
