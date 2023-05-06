interface HomeInfoModal {}

// 首页基本模型
interface HomeMainInfoModal {
  title: string  // 首页标题
  background: string // 首页背景
  btnBackground: string // 首页按钮背景
  qrCodeImg: string //首页二维码
  pcImg: string // 首页pc下载图片
  boardBackground: string // 首页看板背景
  boardTitle: string //首页背景标题
}

// 首页地域模型
interface HomeAreaInfoModal {
  title: string // 首页地域标题
  img: string //首页地域图片
}

// 首页看板模型
interface HomeBoardInfoModal {
  activeList: BoardInfoModal[] // 活动资讯列表
  noticeList: BoardInfoModal[] // 通知资讯列表
  newsList: BoardInfoModal[] //新闻资讯列表
  otherList: BoardInfoModal[] //其他资讯列表
}

type BoardInfoModal = {
  _id: number
  title: string // 资讯标题
  type: string // 资讯类型
  img: string //资讯图片
  content: string // 资讯内容
  createTime: number // 资讯创建时间
}

export { HomeMainInfoModal, HomeAreaInfoModal, HomeBoardInfoModal }
