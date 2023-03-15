import React from 'react'
// import { useLocation } from 'react-router-dom'
import { Avatar } from 'antd';
import { UserOutlined, LikeOutlined, LikeFilled, ProfileOutlined } from '@ant-design/icons';

import './styles/detail.scss'
import dayjs from 'dayjs'

interface CommunityDetailProps {

}

const detaiInfolist = {
  public: {
    title: '新的包裹组件，提供重置样式和提供消费上下文的默认环境。',
    userName: '我是作者',
    describe: '提供可消费 React context 的 message.xxx、Modal.xxx、notification.xxx 的静态方法，可以简化 useMessage 等方法需要手动植入 contextHolder 的问题。提供基于 .ant-app 的默认重置样式，解决原生元素没有 antd 规范样式的问题。',
    createTime: 1679307585,
    avatar: '',
    likeList: ['', '', ''],
    imgList: ['', '', ''],
    isLike: false,
  },
  comment: [
    {
      userId: '',
      userName: '评论robot1号',
      content: ''
    }
  ]



}

const CommunityDetail: React.FC<CommunityDetailProps> = (props) => {
  // const location = useLocation()
  // const { state } = { ...location }

  const like = (v: boolean) => {
    // setIslike(v)
  }

  return (
    <div className='community-detail'>
      {/* <div className='detail-title'>
        <span>当前热帖</span>
      </div> */}
      <div className='detail-contain'>
        <div className='detail-head'>
          <div className='head-avatar'>
            <Avatar shape='circle' size='large' icon={<UserOutlined />} src='' />
          </div>
          <div className='head-info'>
            <div>{detaiInfolist.public.userName}</div>
            <div>{dayjs(detaiInfolist.public.createTime).format('YYYY-MM-DD hh:mm:ss')}</div>
          </div>
        </div>
        <div className='detail-body'>
          <div className='body-title'>
            {detaiInfolist.public.title}
          </div>
          <div className='body-description'>
            {detaiInfolist.public.describe}
          </div>
          <div className='body-pic'>
            {
              detaiInfolist.public.imgList.map((item, index) => {
                return (<img key={index + '_' + item} src={item} alt="" />)
              })
            }
            {/* 点赞评论部分 */}
          </div>
          <div className='item-operate'>
            <span>
              <ProfileOutlined />
              <span>{detaiInfolist.public.likeList.length}人</span>
            </span>
            <span onClick={() => like(detaiInfolist.public.isLike)}>
              <LikeOutlined style={{ display: (detaiInfolist.public.isLike) ? 'none' : 'inline' }} />
              <LikeFilled style={{ display: (detaiInfolist.public.isLike) ? 'inline' : 'none' }} />
              <span>{detaiInfolist.comment.length}</span>
            </span>
          </div>
        </div>
        <div className='detail-footer'></div>
      </div>
    </div>
  )
}

export default CommunityDetail