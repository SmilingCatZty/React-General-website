import React, { useState, useEffect } from 'react'
import { Transfer } from 'antd'

function SplitDPOMModal({ Split }) {
  const [splitItemList, setSplitItemList] = useState([])
  const [splitTarget, setSplitTarget] = useState([])
  const [splitSelect, setSplitSelect] = useState([])

  useEffect(() => {
    // Split.forEach((item, index) => {
    //   arr.push({ key: index + '_' + item, title: item })
    // })
    setSplitItemList(Split)
  }, [Split])

  const splitonChange = (nextTargetKeys, direction, moveKeys) => {
    setSplitTarget(nextTargetKeys)
  }

  const splitSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    console.log('SplitItemList', sourceSelectedKeys)
    setSplitSelect([...sourceSelectedKeys, ...targetSelectedKeys])
  }

  return (
    <div>
      <div>
        <span style={{ float: 'left', marginLeft: 16 }}>Original</span>
        <span style={{ float: 'right', marginRight: 320 }}>New</span>
      </div>
      <Transfer
        pagination={{ pageSize: 5 }}
        dataSource={splitItemList}
        targetKeys={splitTarget}
        selectedKeys={splitSelect}
        style={{ marginLeft: 16, marginRight: 16 }}
        listStyle={{ width: 390 }}
        showSearch
        render={item => item.key}
        onChange={splitonChange}
        onSelectChange={splitSelectChange}
        rowKey={item => item}
      />
    </div>
  )
}

export default SplitDPOMModal

SplitDPOMModal.defaultProps = {
  Split: ['c6', 'a2', 'e3']
}
