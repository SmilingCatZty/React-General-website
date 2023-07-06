/**
 * @资讯页模型对象
 */
interface newsInfoModal {}

// 预告模型
interface NewsForecastInfoModal {
  _id: string
  title: string // 预告标题
  content: string // 预告内容
  img: string // 预告图片
  startTime: number //预告开始时间
}

// 页面基础模型
type NewsBasicInfoModal = {
  _id: string
  title: string // 资讯页标题
  background: string // 资讯页背景图
}

// 资讯消息模型
type NewsConsultInfoModal = {
  _id: string
  title: string // 资讯标题
  type: string // 资讯类型
  img: string // 资讯图片
  content: string // 资讯内容
  createTime: number // 资讯创建时间
}

interface ConsultDetailInfoModel extends NewsConsultInfoModal {
  user_name: string
  user_id: number
  user_avatar: string
}

export { NewsForecastInfoModal, NewsBasicInfoModal, NewsConsultInfoModal, ConsultDetailInfoModel }
