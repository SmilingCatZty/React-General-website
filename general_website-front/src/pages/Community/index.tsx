import React, { useRef } from 'react'
import './styles/index.scss'
import PageLeft from './components/communityLeft'
import PageMain from './components/communityMain'
import PageRight from './components/communityRight'
import BlogModal from './components/blog'
import { Outlet, useLocation } from 'react-router-dom'
import { Button, message } from 'antd'
import { FileTextOutlined, VerticalAlignTopOutlined } from '@ant-design/icons';
import { store } from '@/redux'


interface BlogEmits {
  showModal: () => void;
  handleCancel: () => void;
};

const CommunityPage = () => {
  const location = useLocation()
  const { pathname } = { ...location }
  const { global } = store.getState()
  const blogRef = useRef<BlogEmits>(null)

  // const [messageApi, contextHolder] = message.useMessage();


  const writeBlog = () => {
    if (global.loginStatus) {
      blogRef.current?.showModal()
    } else {
      message.info('请点击右上角小头像登录');
    }
  }

  return (
    <div className='homeCommunity'>
      <div style={{ display: (pathname === '/home/community') ? 'block' : 'none' }}>
        <div className='community-occupy'></div>
        <div className='community-contain'>
          <div className='contain-box'>
            <div className='community-left'>
              <PageLeft />
            </div>
            <div className='community-main'>
              <PageMain />
            </div>
            <div className='community-right'>
              <PageRight />
            </div>
          </div>
          <div className='community-main-floating'>
            <div className='floating-btn'>
              <Button shape='round' style={{ width: '40px', height: '40px' }} icon={<FileTextOutlined />} onClick={() => writeBlog()}></Button>
              <Button shape='round' style={{ width: '40px', height: '40px' }} icon={<VerticalAlignTopOutlined />}></Button>
            </div>
          </div>
        </div>

      </div>
      <div
        className='community-detail'
        style={{ display: (pathname === '/home/community/post-detail') ? 'block' : 'none' }}
      >
        <Outlet />
      </div>
      <BlogModal ref={blogRef} />
    </div >
  )
}

export default CommunityPage