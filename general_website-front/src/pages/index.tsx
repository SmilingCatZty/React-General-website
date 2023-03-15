import React from 'react';
import { Outlet } from 'react-router-dom';
import { Avatar } from 'antd';
import { AppstoreOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import './home.scss'
import Navigation from '@/components/Navigate/index';
import { NavigateInfoModal } from '@/components/Navigate/navigate'

const HomePage: React.FC = () => {

  const navList: NavigateInfoModal = {
    defaultNav: 'community',
    webLogo: '',
    userAvatar: '',
    menuList: [
      {
        label: '首页',
        key: 'main',
        icon: <MailOutlined />,
      },
      {
        label: '资讯',
        key: 'news',
        icon: <AppstoreOutlined />,
        disabled: false,
      },
      {
        label: '社区',
        key: 'community',
        icon: <AppstoreOutlined />,
        disabled: false,
      },
      {
        label: '数据分析',
        key: 'data-manager',
        icon: <AppstoreOutlined />,
        disabled: true,
      },
      {
        label: '资讯管理',
        key: 'news-manager',
        icon: <AppstoreOutlined />,
        disabled: true,
      },
      {
        label: '发帖管理',
        key: 'send-manager',
        icon: <AppstoreOutlined />,
        disabled: true,
      },
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

  return (
    <div className='homePage'>
      <div className='home-navigation'>
        <div className='nav-home'>
          <img src={navList.webLogo} alt="" />
        </div>
        <div className='nav-navigation'>
          <Navigation navList={navList} />
        </div>
        <div className='nav-personal'>
          <div className='personal-avatar'>

            <Avatar size={52} src={navList.userAvatar} icon={<UserOutlined />} />
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default HomePage