import React from 'react'
import '../styles/other.scss'
import { DisplayOtherModel, DisplayOtherImgInfoModel } from '@/modules/display'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectCube, EffectCoverflow } from 'swiper'
import 'swiper/css/pagination'

interface OtherProps {
  otherInfo: DisplayOtherModel
}

const DisplayOther: React.FC<OtherProps> = (props) => {
  return (
    <div className='display-other'>
      <div className='display-other-title'>{props.otherInfo.title}</div>
      <div className='other-contain'>
        <div className='wrap'>
          <Swiper
            modules={[Autoplay, Pagination, EffectCube, EffectCoverflow]}
            // direction='vertical'
            effect='coverflow'
            style={{ width: '100%', height: '95%' }}
            autoplay={false}
            loop
            pagination={{
              clickable: false,
              bulletClass: 'my-bullet',
              bulletActiveClass: 'my-bullet-active',
            }}
            slidesPerView={1}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 100,
              depth: 400,
              modifier: 2,
              slideShadows: false
            }}
          >
            {
              props.otherInfo.imgInfoList.map((item: DisplayOtherImgInfoModel) => {
                return (
                  <SwiperSlide key={item.imgTitle}>
                    <div className='item-contain' >
                      <div className='item-title' style={{ height: '5%' }}><h2>{item.imgTitle}</h2></div>
                      <div className='item-despription' style={{ height: '10%' }}><h3>{item.description}</h3></div>
                      <p style={{ height: '5%' }}>详情请见+</p>
                      <img className='item-img' src={item.imgPath} alt="" />
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
        <div>
        </div>
      </div>
    </div >
  )
}

DisplayOther.defaultProps = {
  otherInfo: {
    title: '',
    imgInfoList: [
      { imgTitle: '', description: '', imgPath: '' }
    ]
  }
}
export default DisplayOther

