import React, { useEffect, useState } from 'react';
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
    getItem('新活动预告', 'activity-forecast'),
  ]),
  getItem('社区管理', 'sub3', <SettingOutlined />, [
    getItem('社区帖子管理', 'blog'),
  ]),
  getItem('人员管理', 'sub4', <SettingOutlined />, [
    getItem('用户权限', 'user'),
  ]),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];

const DataAnalysis: React.FC = () => {
  const [openKeys, setOpenKeys] = useState<string>(''); // 左侧导航栏父项
  const [openItemKey, setOpenItemKey] = useState<string>('') // 左侧导航栏子项
  const [openTitle, setOpenTitle] = useState<string>('') // 右侧标题
  const navigateTo = useNavigate()


  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => {
      return [openKeys].indexOf(key) === -1
    });
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) !== -1) {
      setOpenKeys(latestOpenKey);
      localStorage.setItem('data-manager-key', latestOpenKey)
    }
  };

  const menuItemHandler = (v: MenuInfo) => {
    let title = '在线人数统计'
    switch (v.key) {
      case 'analyse':
        title = '在线人数统计'
        break
      case 'consult':
        title = '咨询汇总列表'
        break
      case 'consult-detail':
        title = '咨询内容编辑'
        break
      case 'blog':
        title = '社区帖子列表'
        break
    }
    console.log(v.key);

    setOpenTitle(() => title)
    setOpenItemKey(v.key)
    localStorage.setItem('data-manager-title', title)
    if (v.key !== 'person') {
      navigateTo(v.key)
      localStorage.setItem('data-manager-navgate',v.key)
      localStorage.setItem('data-manager-itemKey', v.key)
    } else {
      navigateTo('/home/data-manager')
    }
  }

  useEffect(() => {
    const localNavigate = localStorage.getItem('data-manager-navgate')
    const localTitle = localStorage.getItem('data-manager-title')
    const localOpenKeys = localStorage.getItem('data-manager-key')
    const localOpenItemKeys = localStorage.getItem('data-manager-itemKey')

    if (localNavigate) {
      navigateTo(localNavigate)
    } else {
      navigateTo('analyse')
    }

    if (localTitle && localOpenKeys && localOpenItemKeys) {
      setOpenTitle(() => localTitle)
      setOpenKeys(() => localOpenKeys)
      setOpenItemKey(() => localOpenItemKeys)
    } else {
      setOpenTitle(() => '在线人数统计')
      setOpenKeys(() => 'sub1')
      setOpenItemKey(() => 'analyse')
    }
  }, [navigateTo])

  return (
    <div className='data-analysis'>
      <div className='data-contain'>
        <div className='analysis-menu'>
          <Menu
            mode="inline"
            openKeys={[openKeys]}
            selectedKeys={[openItemKey]}
            defaultOpenKeys={[openKeys]}
            defaultSelectedKeys={[openItemKey]}
            onOpenChange={onOpenChange}
            style={{ width: 256 }}
            items={items}
            onClick={menuItemHandler}
          />
        </div>
        <div className='analysis-container'>
          <div className='analysis-title'>{openTitle}</div>
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