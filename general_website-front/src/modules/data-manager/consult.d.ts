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
  info:ConsultInfoModel
  // title?: string
  // type?: string
  // img?: string
  // content?: string
}

export { ConsultInfoModel,RequestGetInfoListModel }
