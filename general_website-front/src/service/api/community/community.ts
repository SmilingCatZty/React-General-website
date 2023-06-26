import axios from '../../request'

const api = {
  /**
   * 获取好友列表
   * @param {number} id
   */
  getFriendList: (id: number) => {
    return axios({
      method: 'get',
      url: `/friend/list/${id}`
    })
  },

  /**
   * 获取博客列表
   * @param {number}page
   * @param {number}size
   */
  getBlogPassList: (page: number, size: number) => {
    return axios({
      method: 'get',
      url: `/blog/passList`,
      params: { page, size }
    })
  },

  /**
   * 获取热点资讯列表
   */
  getHotPostList: () => {
    return axios({
      method: 'get',
      url: `/blog/postList`
    })
  },

  /**
   * 获取热点资讯列表
   */
  getHotConsultList: () => {
    return axios({
      method: 'get',
      url: `/notice/consultList`
    })
  },

  /**
   * 点赞
   * @param {number}blog_id
   * @param {number}blog_user_id
   */
  like: (blog_id: number, blog_user_id: number) => {
    return axios({
      method: 'put',
      url: '/blog/like',
      data: {
        blog_id,
        blog_user_id
      }
    })
  }
}
export default api
