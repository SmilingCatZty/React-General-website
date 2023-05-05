import axios from '../request'
import { ConsultInfoModel, RequestGetInfoListModel, ForecastInfoModal } from '@/modules/data-manager/consult'

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
    return axios({
      method: 'get',
      url: '/news/list',
      data: {
        params
      }
    })
  },

  // 获取活动预告
  getActivityForecast: () => {
    return axios({
      method: 'get',
      url: '/forecast/list'
    })
  },

  // 更新活动预告
  updateActivityForecast: (_id: string, params: ForecastInfoModal) => {
    return axios({
      method: 'put',
      url: '/forecast/update',
      data: {
        _id,
        info: { ...params }
      }
    })
  }
}

export default api
