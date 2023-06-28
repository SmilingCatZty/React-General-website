import axios from '../../request'

const api = {
  /**
   * 图片上传
   * @param {file} formData
   */
  upload: (formData: any) => {
    return axios({
      method: 'post',
      url: `/upload/image`,
      data: {
        formData
      }
    })
  }
}

export default api
