import React from 'react';
import { Outlet } from 'react-router-dom';
import { Avatar } from 'antd';
import { HomeOutlined, MailOutlined, UserOutlined, AlibabaOutlined, LineChartOutlined, PushpinOutlined } from '@ant-design/icons';
import './home.scss'
import Navigation from '@/components/Navigate/index';
import { NavigateInfoModal } from '@/components/Navigate/navigate'

const HomePage: React.FC = () => {

  const navList: NavigateInfoModal = {
    defaultNav: 'data-analysis',
    webLogo: '',
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