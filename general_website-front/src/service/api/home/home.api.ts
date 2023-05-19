import axios from '../../request'

const api = {
  // 获取首页信息
  getHomeList: () => {
    return axios({
      method: 'get',
      url: '/home/list'
    })
  }
}

export default api
