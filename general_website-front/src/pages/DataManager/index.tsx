import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import './styles/index.scss'
import Example from './example'
import TEST from './components/TEST'

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

const list = ''

const items: MenuItem[] = [
  getItem('数据分析', 'sub1', <MailOutlined />, [
    getItem('数据分析1', '1'),
  ]),
  getItem('资讯管理', 'sub2', <AppstoreOutlined />, [
    getItem('新闻', 'news'),
    getItem('通知', 'notice'),
    getItem('活动', 'active'),
    getItem('其他', 'other'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
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

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

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
          />
        </div>
        <div className='analysis-container'>
          <div className='analysis-title'>在线人数统计</div>
          <div className='analysis-content'>
            {/* <Example/> */}
            <TEST/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAnalysis;