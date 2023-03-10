import React from 'react'
import './swipper.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectCube,EffectCoverflow } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { SwiperModel, SwiperImgListModal } from '../../modules/swiper'

interface SwiperProps extends SwiperModel {
  effectType?: 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative'
}

const SwiperPage: React.FC<SwiperProps> = (props) => {  
  return (
    <div className='wrap'>
      <Swiper
        modules={[Autoplay, Pagination, EffectCube,EffectCoverflow]}
        // direction='vertical'
        effect={props.effectType}
        style={{ width: '100%', height: '100%' }}
        autoplay={true}
        loop
        pagination={{
          ...props.s_pagination
        }}
      >
        {
          props.s_list.map((item: SwiperImgListModal) => {
            return (
              <SwiperSlide key={item.imgId}>
                <img className='wrapper-img' src={item.imgPath} alt="" />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

// props默认值
SwiperPage.defaultProps = {
  s_pagination: {
    clickable: true,
    bulletClass: 'my-bullet',
    bulletActiveClass: 'my-bullet-active',
  },
  effectType: 'slide'
}
export default SwiperPage