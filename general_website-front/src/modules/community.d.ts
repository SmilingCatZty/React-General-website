interface PostModal {
  userInfo: CommunityUserModal[]
  hotInfo: CommunityHotModal
}

interface FriendsModal {
  userId: string
  userName: string
  avatar: string
  isLine: boolean
  msgType: 'pic' | 'word'
}

interface CommunityUserModal {
  userName: string
  avatar: string
  postList: CommunityPostModal
}
interface CommunityPostModal {
  postId: string | number
  title: string
  sendTime: string | number
  description: string
  imgList: string[]
  isLike: boolean
  likeNum: number
  commentsNum: number
}

interface CommunityHotModal {
  hotPostList: HotItemModal[]
  hotNewsList: HotItemModal[]
}

interface HotItemModal {
  id: string,
  title: string
}

// 聊天记录模型
interface ChatContentModal {
  userId: string
  content: string
  time: number | string
}

export {
  PostModal,
  CommunityUserModal,
  CommunityHotModal,
  FriendsModal,
  ChatContentModal
}