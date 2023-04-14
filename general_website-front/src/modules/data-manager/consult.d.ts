type ConsultInfoModel = {
  _id?: number
  title?: string
  type?: string
  img?: string
  content?: string
  createTime?: number
}

interface CommonModal {
  page: number
  size: number
}

interface RequestGetInfoListModel extends CommonModal {
  info: ConsultInfoModel
  // title?: string
  // type?: string
  // img?: string
  // content?: string
}

interface ForecastInfoModal {
  _id?: string
  title: string
  content: string
  img: string
  startTime: any
}

export { ConsultInfoModel, RequestGetInfoListModel, ForecastInfoModal }
