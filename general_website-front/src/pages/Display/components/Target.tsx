import React from 'react'
import '../styles/target.scss'
import { DisplayTargetModel } from '@/modules/display'

interface DisplayTargetProps {
  targetInfo: DisplayTargetModel
}

const DisplayTarget: React.FC<DisplayTargetProps> = (props) => {
  return (
    <div className='display-target'>
      <div className='display-target_title'>{props.targetInfo.title}</div>
      <div className='display-target-main'>
        {
          props.targetInfo.targetInfoList.map((item, index) => {
            return (
              <div key={item.targetNum + '_' + index} className='display-target-contain'>
                <div className='target-title'>
                  <h2>{item.targetNum}</h2>
                </div>
                <div className='target-content'>{item.targetDescription}</div>
              </div>

            )
          })
        }

      </div>
    </div>
  )
}

export default DisplayTarget