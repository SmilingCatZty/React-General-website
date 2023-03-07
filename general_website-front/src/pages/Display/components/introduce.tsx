import React from 'react'
import { DisplayIntroduceModel } from '@/modules/display'

interface IntroduceProps {
  introduceInfo: DisplayIntroduceModel
}

const DisplayIntroduce: React.FC<IntroduceProps> = (props) => {
  return (
    <div className='display-introduce'>
      <div className='display-introduce_title'>{props.introduceInfo.title}</div>
      <div className='display-introduce_main'>
        <div className='display-introduce_gist'><h3>{props.introduceInfo.introduceTitle}</h3></div>
        <div className='display-introduce_describe'>
          {
            props.introduceInfo.introduceInfoList.map((item) => {
              return (
                <p>{item.description}</p>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default DisplayIntroduce