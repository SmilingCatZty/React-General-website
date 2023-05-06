import React from 'react'
import '../styles/main.scss'
import { HomeMainInfoModal } from '@/modules/home/home'
import {
  PlayCircleFilled
} from '@ant-design/icons';

interface MainProps {
  mainInfo: HomeMainInfoModal
}

const HomeMain: React.FC<MainProps> = (props) => {
  const { mainInfo } = { ...props }

  return (
    <div className='home-main' style={{ backgroundImage: `url(${mainInfo.background})` }}>
      {/* 内容部分 */}
      <div className='main-contain'>
        <div className='main-title'>
          <div>{mainInfo.title}</div>
        </div>
        <div className='main-video_btnbg' style={{ backgroundImage: `url(${mainInfo.btnBackground})` }}>
          <div className='main-video_btn'>
            <PlayCircleFilled style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
        <div className='main-download'>
          <div className='download-container'>
            <div className='download-code'>
              <img src={mainInfo.qrCodeImg} alt="" />
            </div>
            <div className='download-type'>
              Welcome to contact
            </div>
            <div className='download-pc'>
              <img src={mainInfo.pcImg} alt="" />
            </div>
          </div>
        </div>
        <div className='main-arrow'>
          <div className='arrow'></div>
          <div className='arrow'></div>
          <div className='arrow'></div>
        </div>
      </div>
    </div>
  )
}

export default HomeMain