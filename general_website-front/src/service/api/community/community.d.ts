import { type } from 'os'

type pageModel = {
  page: number
  size: number
}

// 获取博客列表（黑、白名单）模型
interface GetBlogListModel {
  page: number
  size: number
  status: string
}

type PublishCommentModel = {
  comment_blog_id: string // 评论博客id
  comment_user_id: number // 评论者id
  comment_content?: string // 评论内容
  comment_sender_id: number // 被评论者id
  comment_create_time: number // 评论时间
}

export { pageModel, GetBlogListModel, PublishCommentModel }
