import axios from '../request'
import { ConsultInfoModel, RequestGetInfoListModel } from '@/modules/data-manager/consult'

const api = {
  // 获取资讯列表
  getConsultInfo: (params: RequestGetInfoListModel) => {
    return axios({
      method: 'get',
      url: '/notice/list',
      params: {
        ...params
      }
    })
  },

  // 更新资讯列表
  updateConsultInfo: (params: ConsultInfoModel) =>
    axios({
      method: 'put',
      url: '/notice/update',
      data: {
        ...params
      }
    })
}

export default api
