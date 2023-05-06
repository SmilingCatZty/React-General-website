type ConsultInfoModel = {
  _id?: number
  title?: string // 资讯标题
  type?: string // 资讯类型
  img?: string // 资讯图片
  content?: string // 资讯内容
  createTime?: number // 资讯创建时间
}

interface CommonModal {
  page: number
  size: number
}

interface RequestGetInfoListModel extends CommonModal {
  info: ConsultInfoModel
}

interface ForecastInfoModal {
  _id?: string
  title: string // 预告标题
  content: string // 预告内容
  img: string // 预告图片
  startTime: any // 预告开始时间
}

export { ConsultInfoModel, RequestGetInfoListModel, ForecastInfoModal }
