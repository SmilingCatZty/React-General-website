import React from 'react'
import '../styles/area.scss'
import { HomeAreaInfoModal } from '@/modules/home/home'

interface AreaProps {
  areaList: HomeAreaInfoModal[]
}

const HomeArea: React.FC<AreaProps> = (props) => {
  return (
    <div className='home-area'>
      {props.areaList.map((item) => {
        return (
          <div key={item.title} className='area-background' style={{ backgroundImage: `url(${item.img})` }}>
          </div>
        )
      })}
    </div>
  )
}

export default HomeArea