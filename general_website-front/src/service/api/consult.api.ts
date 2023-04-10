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
    }),

  // 添加咨询
  addConsultInfo: (params: ConsultInfoModel) =>
    axios({
      method: 'post',
      url: '/notice/add',
      data: {
        ...params
      }
    }),

  // 获取资讯主页信息
  getNewsInfo: (params?: string) => {
    axios({
      method: 'get',
      url: '/news/list',
      data: {
        params
      }
    })
  }
}

export default api
