type CommunityInfoModel = {
  friend_list: FriendInfoModal[] // 好友列表
  friend_apply_list: number[] // 好友申请 列表
  friend_accept_list: number[] // 好友申请-同意 列表
  friend_reject_list: number[] // 好友申请-拒绝 礼拜
}

type FriendInfoModal = {
  account_avatar: string // 用户头像
  account_id: number // 用户id
  account_login_time: number // 用户登录时间
  account_name: string // 用户名称
  messageInfo: FriendChatModel[] // 聊天记录表
  noReadCount: number // 未读信息数
}

type FriendChatModel = {
  sender_id: number // 发送方id
  reciever_id: number // 接收方id
  message: string // 消息
  status: number // 状态
  send_time: number // 发送时间
}

export { CommunityInfoModel, FriendChatModel }
