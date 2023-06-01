type CommunityInfoModel = {
  _id: string
  sender_id: number
  reciever_id: number
  friend_signal: string
  status: boolean
}

type CommunityChatModel = {
  sender_id: number
  reciever_id: number
  message: string
  status: number
  send_time: number
}

export { CommunityInfoModel, CommunityChatModel }
