import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { Avatar, Popover } from 'antd';
import { HomeOutlined, MailOutlined, UserOutlined, AlibabaOutlined, LineChartOutlined, PushpinOutlined } from '@ant-design/icons';
import './home.scss'
import Navigation from '@/components/Navigate/index';
import { NavigateInfoModal } from '@/components/Navigate/navigate'
import LoginPopUp from '@/pages/Login/index'

interface ModalFuncType {
  showModal: () => void
  closeModal: () => void
}

const HomePage: React.FC = () => {
  let loginRef = useRef<ModalFuncType>(null)

  const navList: NavigateInfoModal = {
    defaultNav: 'data-analysis',
    webLogo: 'https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress',
    userAvatar: '',
    menuList: [
      {
        label: '首页',
        key: 'main',
        icon: <HomeOutlined />
      },
      {
        label: '资讯',
        key: 'news',
        icon: <MailOutlined />,
        disabled: false,
      },
      {
        label: '社区',
        key: 'community',
        icon: <AlibabaOutlined />,
        disabled: false,
      },
      {
        label: '数据管理',
        key: 'data-manager',
        icon: <LineChartOutlined />,
        disabled: false,
      },
      {
        label: '配置',
        key: 'config',
        icon: <PushpinOutlined />,
        disabled: true,
      }
      // {
      //   label: (
      //     <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
      //       Navigation Four - Link
      //     </a>
      //   ),
      //   key: 'home-area',
      // },
    ]
  }
  const personalhandler = () => {
    console.log('头像点击');
    loginRef.current?.showModal()
  }

  return (
    <div className='homePage'>
      <div className='home-navigation'>
        <div className='nav-home'>
          <img src={navList.webLogo} alt="" />
        </div>
        <div className='nav-navigation'>
          <Navigation navList={navList} />
        </div>
        <Popover content={() =>
        (
          <div>
            <div>个人中心</div>
            <div>退出登录</div>
          </div>
        )
        } title="Title">
          <div className='nav-personal' onClick={() => personalhandler()}>
            <div className='personal-avatar'>
              <Avatar size={52} src={navList.userAvatar} icon={<UserOutlined />} />
            </div>
          </div>
        </Popover>
      </div>
      <LoginPopUp ref={loginRef} />
      <Outlet />
    </div >
  );
};

export default HomePage