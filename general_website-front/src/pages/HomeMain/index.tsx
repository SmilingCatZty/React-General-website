import React, { useEffect } from 'react'
import Main from './components/main'
import Board from './components/board'
import Area from './components/area'
import MyFooter from '@/components/Footer/index'
import { HomeInfoModal } from '@/modules/home'
// import { FooterInfoModal } from '@/modules/footer'
import axios from 'axios'



const HomeMain = () => {

  useEffect(() => {
    getHomeInfo()
  })

  const getHomeInfo = async () => {
    try {
      await axios.get('/home/page',);
    } catch (error) {
      console.log('error', error);

    }
  }

  const homeInfo: HomeInfoModal = {
    main: {
      title: '我是网站主题',
      background: 'http://rqthp68he.hn-bkt.clouddn.com/.guidao/sky1_8k.jpg',
      btnBackground: 'http://rqthp68he.hn-bkt.clouddn.com/yuanshen/video-btn_bg.png',
      qrCodeImg: '',
      pcImg: ''
    },
    board: {
      title: '新闻资讯',
      background: 'http://rqthp68he.hn-bkt.clouddn.com/yuanshen/ys-main_bg.jpeg',
      boardList: {
        latestList: [
          { id: '1', title: '最新消息1', path: '' },
          { id: '2', title: '最新消息2', path: '' },
          { id: '3', title: '最新消息3', path: '' },
          { id: '4', title: '最新消息4', path: '' },
          { id: '5', title: '最新消息5', path: '' },
          { id: '6', title: '最新消息6', path: '' }
        ],
        newsList: [
          { id: '1', title: '新闻1', path: '' },
          { id: '2', title: '新闻2', path: '' },
          { id: '3', title: '新闻3', path: '' },
          { id: '4', title: '新闻4', path: '' },
          { id: '5', title: '新闻5', path: '' }
        ],
        noticeList: [
          { id: '1', title: '通知1', path: '' },
          { id: '2', title: '通知2', path: '' },
          { id: '3', title: '通知3', path: '' },
          { id: '4', title: '通知4', path: '' },
          { id: '5', title: '通知5', path: '' },
          { id: '6', title: '通知6', path: '' },
        ],
        activeList: [
          { id: '1', title: '活动1', path: '' },
          { id: '2', title: '活动2', path: '' },
          { id: '3', title: '活动3', path: '' },
          { id: '4', title: '活动4', path: '' },
          { id: '5', title: '活动5', path: '' },
        ]
      }
    },
    area: {
      areaList: [
        { title: '蒙德', img: 'http://rqthp68he.hn-bkt.clouddn.com/yuanshen/ys-mende.jpeg' },
        { title: '璃月', img: 'http://rqthp68he.hn-bkt.clouddn.com/yuanshen/ys-liyue.jpeg' },
        { title: '稻妻', img: 'http://rqthp68he.hn-bkt.clouddn.com/yuanshen/ys-daoqi.jpeg' },
        { title: '须弥', img: 'http://rqthp68he.hn-bkt.clouddn.com/yuanshen/ys-xumi.jpeg' },
        { title: '敬请期待', img: 'http://rqthp68he.hn-bkt.clouddn.com/yuanshen/ys-other.jpeg' }
      ]
    }
  }


  return (
    <div className='homeMain'>
      <div className='main' style={{ width: '100vw', height: '100vh' }}>
        <Main mainInfo={homeInfo.main} />
      </div>
      <div className='board' style={{ width: '100vw', height: '100vh' }}>
        <Board boardInfo={homeInfo.board} />
      </div>
      <div className='area' style={{ width: '100vw', minHeight: '40vh' }}>
        <Area areaInfo={homeInfo.area} />
      </div>
      <div className='thanks' style={{ width: '100vw', height: '60vh' }}>
        <MyFooter />
      </div>
    </div>
  )
}

export default HomeMain