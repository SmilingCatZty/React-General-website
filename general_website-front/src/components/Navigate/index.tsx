import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { NavigateInfoModal } from './navigate'

interface NavigateProps {
  navList: NavigateInfoModal
}

const Navigation: React.FC<NavigateProps> = (props) => {
  const [current, setCurrent] = useState(props.navList.defaultNav);
  const navigateTo = useNavigate()

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key)
    navigateTo(e.key)
  };

  return (
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={props.navList.menuList} />
  )
}

export default Navigation;