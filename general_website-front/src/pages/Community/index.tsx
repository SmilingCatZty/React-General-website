import React from 'react'
import './styles/index.scss'
import PageLeft from './components/communityLeft'
import PageMain from './components/communityMain'
import PageRight from './components/communityRight'
import { PostModal } from '@/modules/community'
import { Outlet, useLocation } from 'react-router-dom'

const mainInfo: PostModal = {
  userInfo: [
    {
      userName: 'Albate',
      avatar: '',
      postList: {
        postId: 0,
        title: '阿尔伯特第一次发的帖子',
        sendTime: 1679307224,
        description: '这是我第一次发的帖子,它象征着快乐',
        imgList: ['', '', '', ''],
        isLike: true,
        likeNum: 16,
        commentsNum: 20,
      }
    },
    {
      userName: 'Justin',
      avatar: '',
      postList: {
        postId:1,
        title: '贾斯丁第一次发的帖子',
        sendTime: 1679307224,
        description: '这是我第一次发的帖子,它象征着和平',
        imgList: ['', '', '', ''],
        isLike: false,
        likeNum: 16,
        commentsNum: 20,
      }
    },
    {
      userName: 'Alpha',
      avatar: '',
      postList: {
        postId:2,
        title: '阿尔法第一次发的帖子',
        sendTime: 1679307224,
        description: '这是我第一次发的帖子,它象征着希望',
        imgList: ['', '', '', ''],
        isLike: true,
        likeNum: 16,
        commentsNum: 20,
      }
    }
  ],
  hotInfo: {
    hotNewsList: [
      { id: 'hnl1', title: '这里是官方hot消息1' },
      { id: 'hnl2', title: '这里是官方hot消息2' },
      { id: 'hnl3', title: '这里是官方hot消息3' },
      { id: 'hnl4', title: '这里是官方hot消息4' },
      { id: 'hnl5', title: '这里是官方hot消息5' }
    ],
    hotPostList: [
      { id: 'hpl1', title: '这里是hot帖子1' },
      { id: 'hpl2', title: '这里是hot帖子2' },
      { id: 'hpl3', title: '这里是hot帖子3' },
      { id: 'hpl4', title: '这里是hot帖子4' },
      { id: 'hpl5', title: '这里是hot帖子5' },
      { id: 'hpl6', title: '这里是hot帖子6' },
      { id: 'hpl7', title: '这里是hot帖子7' },
      { id: 'hpl8', title: '这里是hot帖子8' },
      { id: 'hpl9', title: '这里是hot帖子9' },
      { id: 'hpl10', title: '这里是hot帖子10' }
    ]
  }
}


const CommunityPage = () => {

  const location = useLocation()
  const { pathname } = { ...location }
  console.log(useLocation());

  return (
    <div className='homeCommunity'>
      <div style={{ display: (pathname === '/home/community') ? 'block' : 'none' }}>
        <div className='community-occupy'></div>
        <div className='community-contain'>
          <div className='community-left'>
            <PageLeft />
          </div>
          <div className='community-main'>
            <PageMain postingList={mainInfo.userInfo} />
          </div>
          <div className='community-right'>
            <PageRight hotList={mainInfo.hotInfo} />
          </div>
        </div>

      </div>
      <div style={{ display: (pathname === '/home/community/post-detail') ? 'block' : 'none' }}>
        <Outlet />
      </div>
    </div >
  )
}

export default CommunityPage