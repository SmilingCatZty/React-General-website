/**
 * @资讯页模型对象
 */
interface newsInfoModal { }

// 预告模型
interface NewsForecastInfoModal {
  _id: string
  title: string
  content: string
  img: string
  startTime: number
}

// 页面基础模型
type NewsBasicInfoModal = {
  _id: string
  title: string
  background: string
}

// 资讯消息模型
type NewsConsultInfoModal = {
  _id: number
  title: string
  type: string
  img: string
  content: string
  createTime: number
}

export { NewsForecastInfoModal, NewsBasicInfoModal,NewsConsultInfoModal }
