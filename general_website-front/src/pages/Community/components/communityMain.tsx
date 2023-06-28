import React, { useEffect, useState } from 'react'
import { Avatar } from 'antd';
import { UserOutlined, LikeOutlined, LikeFilled, ProfileOutlined } from '@ant-design/icons';
import '../styles/main.scss'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom';
import { BlogInfoModel } from '@/modules/community/community';
import api from '@/service/api/community/community'
import { store } from '@/redux';

interface CommunityMainProps { }

const CommunityMain: React.FC<CommunityMainProps> = (props) => {
  const navigateTo = useNavigate()
  const { user } = store.getState()

  let [blogList, setBlogList] = useState<BlogInfoModel[]>([]) // 博客列表
  const pageInfo = { page: 1, size: 10 }  // 列表信息

  // 点赞
  const like = async (item: any) => {
    const res = await api.like(item.blog_id, 1000)
    if (res.data && res.status === 200) {
      getBlogList()
    }
  }

  // 查看详情
  const viewDetail = (id: string | number) => {
    navigateTo(`/home/community/post-detail?id=${id}`)
  }

  // 获取博客列表
  const getBlogList = async () => {
    try {
      const { data, status } = await api.getBlogPassList(pageInfo.page, pageInfo.size)
      if (status === 200 && data) {
        setBlogList(() => data)
      }
    } catch (error) {
      console.error('blog', error)
    }
  }

  useEffect(() => {
    return () => {
      getBlogList()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className='mainpage'>
      <div className='main-contain'>
        {
          blogList.map((item, index) => {
            return (
              <div key={index + '_' + item.blog_id} className='contain-items'>
                {/* 头像、个人信息部分 */}
                <div className='item-avatar'>
                  <div className='avatar-img'>
                    <Avatar shape='circle' size='large' icon={<UserOutlined />} src={item.blog_avatar} />
                  </div>
                  <div className='avatar-other'>
                    <p><span>{item.blog_user_name}</span></p>
                    <p><span>{dayjs(item.blog_create_time).format('YYYY-MM-DD hh:mm')}</span></p>
                  </div>
                </div>
                {/* 帖子内容部分 */}
                <div className='item-content' onClick={() => viewDetail(item.blog_id)}>
                  <span className='content-title'>{item.blog_title}</span>
                  <span className='content-description'>{item.blog_content}</span>
                </div>
                <div className='item-pic' style={{ display: item.blog_img.length > 0 ? 'block' : 'none' }}>
                  {
                    item.blog_img.map((pic, index) => {
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
                    <span>{item.blog_comment_list.length}人</span>
                  </span>
                  <span onClick={() => like(item)}>
                    <LikeOutlined style={{ display: (item.blog_like_list.includes(user.userInfo.account_id)) ? 'none' : 'inline' }} />
                    <LikeFilled style={{ display: (item.blog_like_list.includes(user.userInfo.account_id)) ? 'inline' : 'none' }} />
                    <span>{item.blog_like_list.length}</span>
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