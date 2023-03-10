import React from 'react'
import '../styles/area.scss'
import { HomeAreaModal } from '@/modules/home'

interface AreaProps {
  areaInfo: HomeAreaModal
}

const HomeArea: React.FC<AreaProps> = (props) => {
  const { areaList } = { ...props.areaInfo }
  return (
    <div className='home-area'>
      {areaList.map((item) => {
        return (
          <div key={item.title}  className='area-background' style={{ backgroundImage: `url(${item.img})` }}>
          </div>
        )
      })}
    </div>
  )
}

export default HomeArea