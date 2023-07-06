import React, { useEffect, useState } from 'react'
import { Avatar, Button, Input, message } from 'antd';
import { UserOutlined, LikeOutlined, LikeFilled, ProfileOutlined } from '@ant-design/icons';
import '../styles/main.scss'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom';
import { BlogInfoModel } from '@/modules/community/community';
import api from '@/service/api/community'
import { store } from '@/redux';

interface CommunityMainProps { }
interface CommunityBlogInfoModel extends BlogInfoModel {
  visible: boolean
}

const CommunityMain: React.FC<CommunityMainProps> = (props) => {
  const navigateTo = useNavigate()
  const { user, global } = store.getState()

  let [blogList, setBlogList] = useState<CommunityBlogInfoModel[]>([]) // 博客列表
  const pageInfo = { page: 1, size: 10 }  // 列表信息
  let commentContentValue: string = '' // 评论内容

  // 点赞
  const like = async (item: any) => {
    const res = await api.like(item.blog_id, user.userInfo.account_id)
    if (res.data && res.status === 200) {
      getBlogList()
    }
  }

  // 评论
  const comment = (item: CommunityBlogInfoModel, index: number) => {
    const updatedList = blogList.map((blog, i) => {
      if (i === index) {
        return {
          ...blog,
          visible: !item.visible
        };
      }
      return blog;
    });
    setBlogList(updatedList);
  }

  // 发表评论
  const publishComment = async (item: CommunityBlogInfoModel) => {
    if (global.loginStatus) {
      const params = {
        comment_blog_id: item.blog_id, // 评论博客id
        comment_user_id: user.userInfo.account_id, // 评论者id
        ...(commentContentValue !== '' && { comment_content: commentContentValue }), // 评论内容
        comment_sender_id: item.blog_user_id, // 被评论者id
        comment_create_time: dayjs().valueOf() // 评论时间
      }

      try {
        const { status, data } = await api.publishComment(params)
        if (status === 201 && data) {
          message.info('评论成功')
          getBlogList()
        }
      } catch (error) {
        console.error('发表评论', error);
      }
    } else {
      message.error('请点击右上角登录')
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
        data.map((item: any) => {
          return item.visible = false
        })
        setBlogList(() => data)
      }
    } catch (error) {
      console.error('blog', error)
    }
  }

  const commentOnchange = (e: any) => {
    const { value: inputValue } = e.target
    commentContentValue = inputValue
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
                {/* 点赞、评论部分 */}
                <div className='item-operate'>
                  <span onClick={() => comment(item, index)}>
                    <ProfileOutlined />
                    <span>{item.blog_comment_list.length}人</span>
                  </span>
                  <span onClick={() => like(item)}>
                    <LikeOutlined style={{ display: (item.blog_like_list.includes(user.userInfo.account_id)) ? 'none' : 'inline' }} />
                    <LikeFilled style={{ display: (item.blog_like_list.includes(user.userInfo.account_id)) ? 'inline' : 'none' }} />
                    <span>{item.blog_like_list.length}</span>
                  </span>
                </div>
                {/* 评论区域 */}
                {
                  item.visible &&
                  <div className='item-comment'>
                    <Input.TextArea autoSize={{ minRows: 1, maxRows: 6 }} placeholder='畅所欲言叭～～' onChange={(e) => commentOnchange(e)}></Input.TextArea>
                    <div className='comment-expand'>
                      <div className='expand-func'>
                        <span className='func-smile'></span>
                        <span className='func-img'></span>
                      </div>
                      <div className='expand-send'>
                        <Button onClick={() => publishComment(item)}>发表</Button>
                      </div>
                    </div>
                    {/* 评论列表 */}
                    <div className="comment-list">
                      {
                        item.blog_comment_list.map((comment: any) => {
                          return (
                            <div className='comment-list-contain' key={comment._id}>
                              <div className='contain-user'>
                                <Avatar shape='square' size='default' icon={<UserOutlined />} src={comment.comment_user_avatar} />
                                <span className='user-name'>{comment.comment_user_name}</span>
                              </div>
                              :
                              <div className='contain-content'>
                                <span>{comment.comment_content}</span>
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default CommunityMain