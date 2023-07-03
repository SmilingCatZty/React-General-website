import React, { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Avatar, Button, Popover } from 'antd';
import { HomeOutlined, MailOutlined, AlibabaOutlined, LineChartOutlined, PushpinOutlined } from '@ant-design/icons';
import './home.scss'
import Navigation from '@/components/navigate/index';
import LoginPopUp from '@/pages/Login/index'
import { NavigateInfoModal } from '@/components/navigate/navigate'
import { connect } from "react-redux";
import { setToken, setUserInfo } from "@/redux/modules/user/action";
import { setLoginStatus } from '@/redux/modules/global/action'
import { store } from '@/redux'

interface ModalFuncType {
  showModal: () => void
  closeModal: () => void
}

const HomePage: React.FC = (props: any) => {
  const { setToken, setUserInfo, setLoginStatus } = props;
  const { user, global } = store.getState()

  useEffect(() => {
    return () => { }
  }, [global.loginStatus])

  let loginRef = useRef<ModalFuncType>(null)
  let [navInfo, setNavInfo] = useState<NavigateInfoModal>({
    defaultNav: 'home',
    webLogo: 'https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress',
    menuList: [
      {
        label: '首页',
        key: '/home/main',
        icon: <HomeOutlined />
      },
      {
        label: '资讯',
        key: '/home/news',
        icon: <MailOutlined />,
        disabled: false,
      },
      {
        label: '社区',
        key: '/home/community',
        icon: <AlibabaOutlined />,
        disabled: false,
      },
      {
        label: '数据管理',
        key: '/home/data-manager',
        icon: <LineChartOutlined />,
        disabled: false,
      },
      {
        label: '配置',
        key: '/home/config',
        icon: <PushpinOutlined />,
        disabled: true,
      }
    ]
  })

  const personalhandler = () => {
    if (!global.loginStatus) {
      loginRef.current?.showModal()
    }
  }

  // 获取用户信息
  const getAccountInfo = (userInfo: any) => {

    setToken(userInfo.access_token)
    setUserInfo(userInfo.info)
    setLoginStatus(true)
    setNavInfo(() => ({ ...navInfo }))
    loginRef.current?.closeModal()

  }

  // 登出
  const logOut = () => {
    setToken('')
    setUserInfo({})
    setLoginStatus(false)
    setNavInfo(() => ({ ...navInfo }))
  }

  const clearStorage = () => {
    const token = store.getState()
    console.log('token', token);
  }

  return (
    <div className='homePage'>
      <div className='home-navigation'>
        <div className='nav-home'>
          <img src={navInfo.webLogo} alt="" />
        </div>
        <div className='nav-navigation'>
          <Navigation navList={navInfo} />
        </div>
        <div>
          <Popover content={() =>
          (
            <div>
              <div>个人中心</div>
              <div onClick={() => logOut()}>退出登录</div>
              <Button onClick={() => clearStorage()}>查看当前redux</Button>
            </div>
          )
          } title="Title">
            <div className='nav-personal' onClick={() => personalhandler()}>
              <div className='personal-avatar'>
                <Avatar size={52} src={user.userInfo.account_avatar} />
              </div>
            </div>
          </Popover>
        </div>
      </div>
      <LoginPopUp ref={loginRef} getAccountInfo={(info: any) => getAccountInfo(info)} />
      <Outlet />
    </div >
  );
};
// 接入redux数据
const mapDispatchToProps = { setToken, setUserInfo, setLoginStatus };
// 关联redux
export default connect(null, mapDispatchToProps)(HomePage)