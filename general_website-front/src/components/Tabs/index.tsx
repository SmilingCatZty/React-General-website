import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const onChange = (key: string) => {
  console.log(key);
};

interface CommonTabProps {
  defaultActiveKey: string
  tabList?: TabsProps
}

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Tab 1`,
    children: (
      <div>123</div>
    ),
  },
  {
    key: '2',
    label: `Tab 2`,
    children: `Content of Tab Pane 2`,
  },
  {
    key: '3',
    label: `Tab 3`,
    children: `Content of Tab Pane 3`,
  },
];

const CommonTabs: React.FC<CommonTabProps> = (props) => {
  return (
    <Tabs defaultActiveKey={props.defaultActiveKey} items={items} onChange={onChange} ></Tabs>
  )
}

export default CommonTabs;

CommonTabs.defaultProps = {
  defaultActiveKey: '1'
}