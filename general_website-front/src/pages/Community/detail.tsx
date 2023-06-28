import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Avatar } from 'antd';
import { UserOutlined, LikeOutlined, LikeFilled, ProfileOutlined } from '@ant-design/icons';
import './styles/detail.scss'
import dayjs from 'dayjs'
import api from '@/service/api/community/community'
import { BlogInfoModel } from '@/modules/community/community';
import { store } from '@/redux';


interface CommunityDetailProps { }

const CommunityDetail: React.FC<CommunityDetailProps> = (props) => {
  const location = useLocation()
  const { hash, search } = location
  const { user } = store.getState() // 获取本地存储的user信息
  const blog_id = (search + hash).replace('?id=', '') // 当前日志id

  const [blogInfo, setBlogInfo] = useState<BlogInfoModel>({
    blog_id: '', // 博客id
    blog_user_id: NaN, // 作者id
    blog_user_name: '', // 博主用户名
    blog_avatar: '', // 博主头像
    blog_title: '', // 博客标题
    blog_content: '', // 博客内容
    blog_img: [], // 博客图片
    blog_like_list: [], // 博客点赞列表
    blog_comment_list: [], // 博客评论列表
    blog_create_time: 0, // 创建时间
  })


  // 点赞
  const like = async (item: BlogInfoModel) => {
    const res = await api.like(item.blog_id, 1000)
    if (res.data && res.status === 200) {
      getBlogInfo()
    }
  }

  // 获取社区帖子详情
  const getBlogInfo = async () => {
    try {
      const { status, data } = await api.getblogInfo(blog_id)
      if (status === 200 && data) {
        setBlogInfo(() => data)
      }
    } catch (error) {
      console.error('community-detail', error);
    }
  }

  useEffect(() => {
    return () => {
      getBlogInfo()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='community-detail'>
      <div className='detail-contain'>
        <div className='detail-head'>
          <div className='head-avatar'>
            <Avatar shape='circle' size='large' icon={<UserOutlined />} src={blogInfo.blog_avatar} />
          </div>
          <div className='head-info'>
            <div>{blogInfo.blog_user_name}</div>
            <div>{dayjs(blogInfo.blog_create_time).format('YYYY-MM-DD hh:mm:ss')}</div>
          </div>
        </div>
        <div className='detail-body'>
          <div className='body-title'>
            {blogInfo.blog_title}
          </div>
          <div className='body-description'>
            {blogInfo.blog_content}
          </div>
          <div className='body-pic' style={{ display: blogInfo.blog_img.length ? 'flex' : 'none' }}>
            {
              blogInfo.blog_img.map((item, index) => {
                return (<img key={index + '_' + item} src={item} alt="" />)
              })
            }
          </div>
          {/* 点赞评论部分 */}
          <div className='item-operate'>
            <span>
              <ProfileOutlined />
              <span>{blogInfo.blog_comment_list.length}人</span>
            </span>
            <span onClick={() => like(blogInfo)}>
              <LikeOutlined style={{ display: (blogInfo.blog_like_list.includes(user.userInfo.account_id)) ? 'none' : 'inline' }} />
              <LikeFilled style={{ display: (blogInfo.blog_like_list.includes(user.userInfo.account_id)) ? 'inline' : 'none' }} />
              <span>{blogInfo.blog_like_list.length}</span>
            </span>
          </div>
        </div>
        <div className='detail-footer'></div>
      </div>
    </div>
  )
}

export default CommunityDetail