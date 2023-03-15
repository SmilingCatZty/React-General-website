import React from 'react'
import { Avatar } from 'antd';
import { UserOutlined, LikeOutlined, LikeFilled, ProfileOutlined } from '@ant-design/icons';
import '../styles/main.scss'
import { CommunityUserModal } from '@/modules/community'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom';

interface CommunityMainProps {
  postingList: CommunityUserModal[]
}


const CommunityMain: React.FC<CommunityMainProps> = (props) => {
  const navigateTo = useNavigate()
  const { postingList } = { ...props }
  // const [isLike, setIslike] = useState<boolean>(false)

  const like = (v: boolean) => {
    // setIslike(v)
  }

  const viewDetail = (id: string | number) => {
    navigateTo(`post-detail?id=${id}`)
  }
  return (
    <div className='mainpage'>
      <div className='main-contain'>
        {
          postingList.map((item, index) => {
            return (
              <div key={index + '_' + item.userName} className='contain-items'>
                {/* 头像、个人信息部分 */}
                <div className='item-avatar'>
                  <div className='avatar-img'>
                    <Avatar shape='circle' size='large' icon={<UserOutlined />} src='' />
                  </div>
                  <div className='avatar-other'>
                    <p><span>{item.userName}</span></p>
                    <p><span>{dayjs(item.postList.sendTime).format('YYYY-MM-DD hh:mm:ss')}</span></p>
                  </div>
                </div>
                {/* 帖子内容部分 */}
                <div className='item-content' onClick={() => viewDetail(item.postList.postId)}>
                  <span className='content-title'>{item.postList.title}</span>
                  <span className='content-description'>{item.postList.description}</span>
                </div>
                <div className='item-pic'>
                  {
                    item.postList.imgList.map((pic, index) => {
                      return (
                        <img key={index} src={pic} alt="" />
                      )
                    })
                  }
                </div>
                {/* 点赞评论部分 */}
                <div className='item-operate'>
                  <span>
                    <ProfileOutlined />
                    <span>{item.postList.likeNum}人</span>
                  </span>
                  <span onClick={() => like(item.postList.isLike)}>
                    <LikeOutlined style={{ display: (item.postList.isLike) ? 'none' : 'inline' }} />
                    <LikeFilled style={{ display: (item.postList.isLike) ? 'inline' : 'none' }} />
                    <span>{item.postList.commentsNum}</span>
                  </span>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default CommunityMain