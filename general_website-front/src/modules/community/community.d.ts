// 社区个人情况信息模型
type CommunityInfoModel = {
  friend_list: FriendInfoModal[] // 好友列表
  friend_apply_list: number[] // 好友申请 列表
  friend_accept_list: number[] // 好友申请-同意 列表
  friend_reject_list: number[] // 好友申请-拒绝 礼拜
}

// 好友信息模型
type FriendInfoModal = {
  account_avatar: string // 用户头像
  account_id: number // 用户id
  account_login_time: number // 用户登录时间
  account_name: string // 用户名称
  messageInfo: FriendChatModel[] // 聊天记录表
  noReadCount: number // 未读信息数
}

// 好友聊天模型
type FriendChatModel = {
  sender_id: number // 发送方id
  reciever_id: number // 接收方id
  message: string // 消息
  status: number // 状态
  send_time: number // 发送时间
}

// 动态日志模型
type BlogInfoModel = {
  blog_id: string // 博客id
  blog_user_id: number // 作者id
  blog_user_name: string // 博主用户名
  blog_avatar: string // 博主头像
  blog_title: string // 博客标题
  blog_content: string // 博客内容
  blog_img: string[] // 博客图片
  blog_like_list: number[] // 博客点赞列表
  blog_comment_list: number[] // 博客评论列表
  blog_create_time: number // 创建时间
}

// 热帖信息模型
type HotPostModel = {
  blog_id: string
  blog_title: string
}

// 热点咨询
type HotNewsModel = {
  _id: string
  title: string
}

export { CommunityInfoModel, FriendChatModel, BlogInfoModel, HotPostModel, HotNewsModel }
