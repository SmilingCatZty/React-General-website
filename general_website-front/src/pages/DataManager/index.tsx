import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import './styles/index.scss'
import { Outlet, useNavigate } from 'react-router-dom';
import { MenuInfo } from 'rc-menu/lib/interface';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('数据分析', 'sub1', <MailOutlined />, [
    getItem('数据分析1', 'analyse'),
  ]),
  getItem('资讯管理', 'sub2', <AppstoreOutlined />, [
    getItem('咨询列表', 'consult'),
    getItem('资讯编辑', 'consult-detail'),
  ]),
  getItem('社区管理', 'sub4', <SettingOutlined />, [
    getItem('社区帖子管理', 'post'),
  ]),
  getItem('人员管理', 'sub5', <SettingOutlined />, [
    getItem('用户权限', 'user'),
  ]),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const DataAnalysis: React.FC = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const navigateTo = useNavigate()

  const [title, setTitle] = useState('在线人数统计')

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const menuItemHandler = (v: MenuInfo) => {
    switch (v.key) {
      case 'consult':
        setTitle(() => '咨询汇总列表')
        break
      case 'consult-detail':
        setTitle(() => '咨询内容编辑')
        break
      case 'community':
        setTitle(() => '社区帖子列表')
        break
    }
    navigateTo(v.key)
  }

  return (
    <div className='data-analysis'>
      <div className='data-contain'>
        <div className='analysis-menu'>
          <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            style={{ width: 256 }}
            items={items}
            onClick={menuItemHandler}
          />
        </div>
        <div className='analysis-container'>
          <div className='analysis-title'>{title}</div>
          <div className='analysis-content'>
            {/* <Example/> */}
            <Outlet />
            {/* <TEST /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAnalysis;