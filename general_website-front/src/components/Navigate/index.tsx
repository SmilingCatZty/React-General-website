import React, { useEffect, useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavigateInfoModal } from './navigate'

interface NavigateProps {
  navList: NavigateInfoModal
}

const Navigation: React.FC<NavigateProps> = (props) => {
  const { pathname } = useLocation()
  const [current, setCurrent] = useState<string>(''); // 这里需要与路由保持一致
  const navigateTo = useNavigate()

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key)
    navigateTo(e.key)
    localStorage.setItem('curTab', e.key)
  };

  useEffect(() => {
    const storage = localStorage.getItem('curTab')
    if (['/home/main', '/home/news', '/home/community', '/home/config'].includes(pathname) && pathname !== storage) {
      setCurrent(() => pathname)
    } else {
      if (storage) {
        setCurrent(() => storage)
      } else {
        setCurrent(() => 'main')
      }
    }
  }, [pathname])

  return (
    <Menu onClick={onClick} selectedKeys={[current]} defaultSelectedKeys={[current]} mode="horizontal" items={props.navList.menuList} />
  )
}

export default Navigation;