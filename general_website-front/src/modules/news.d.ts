interface NewsInfoModal {
  title: string
  background: string
  newActive:NewsActiveModal
  hotList: NewsHotModal[]
  // allNews: NewsAllItemModal[]
}

interface NewsHotModal {
  id: string
  title: string
  img: string
  describe: string
  detailDescription: string
  time: number
}

interface NewsAllItemModal {
  key: string,
  title: string
}

interface NewsActiveModal{
  title: string
  img: string
  time:number
}

export {
  NewsInfoModal
}