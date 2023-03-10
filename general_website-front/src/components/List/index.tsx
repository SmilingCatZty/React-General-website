import React from 'react'
import { List, Typography } from 'antd';

interface ListCompProps {
  data: any[]
}

const ListComp: React.FC<ListCompProps> = (props) => {
  return (
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={props.data}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark>[ITEM]</Typography.Text> {item}
          </List.Item>
        )}
      />
  )
}

export default ListComp