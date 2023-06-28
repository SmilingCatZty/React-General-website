type pageModal = {
  page: number
  size: number
}

// 获取博客列表（黑、白名单）模型
interface GetBlogListModal {
  page: number
  size: number
  status: string
}

export { pageModal, GetBlogListModal }
