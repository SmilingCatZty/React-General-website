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
   * @param {string}blog_id
   * @param {number}blog_user_id
   */
  like: (blog_id: string, blog_user_id: number) => {
    return axios({
      method: 'put',
      url: '/blog/like',
      data: {
        blog_id,
        blog_user_id
      }
    })
  },

  /**
   * 获取日志信息
   * @param {string} blog_id
   */
  getblogInfo: (blog_id: string) => {
    return axios({
      method: 'get',
      url: `/blog/info`,
      params: {
        id: blog_id
      }
    })
  },

  /**
   * 发日志
   * @param {object} createBlogData
   */
  sendBlog: (createBlogData: any) => {
    return axios({
      method: 'post',
      url: `/blog/create`,
      data: {
        ...createBlogData
      }
    })
  }
}
export default api
