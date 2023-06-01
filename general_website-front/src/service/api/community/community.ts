import axios from '../../request'

const api = {
  // 获取好友列表
  getFriendList: (id: number) => {
    return axios({
      method: 'get',
      url: `/friend/list/${id}`
    })
  }
}
export default api
