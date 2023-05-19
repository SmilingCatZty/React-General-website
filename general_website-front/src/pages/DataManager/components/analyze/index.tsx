import { Input } from 'antd'
import React from 'react'

let random = Math.floor(Math.random() * 10) + 1


const DataManagerAnalyse = () => {
  let a = 0

  const handleChange = (event: any) => {
    a = event.target.value
  }
  const enter = () => {
    console.log(random);
    if (a < random) {
      alert('数字偏小')
    } else if (a > random) {
      alert('数字偏大')
    } else {
      alert('恭喜你猜对了')
    }
  }

  const re = () => { 
    random = Math.floor(Math.random() * 10) + 1
  }
  return (
    <div>DataManagerAnalyse
      <Input onChange={handleChange} ></Input>
      <button onClick={enter}>输入</button>
      <button onClick={re}>重新开始</button>
    </div>
  )
}

export default DataManagerAnalyse