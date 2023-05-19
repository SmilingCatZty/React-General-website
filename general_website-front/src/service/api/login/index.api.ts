import axios from '../../request'

const api = {
  // 登录
  login: (account_name: string, account_password: string) => {
    return axios({
      method: 'post',
      url: '/user/login',
      data: { account_name, account_password }
    })
  }
}

export default api
