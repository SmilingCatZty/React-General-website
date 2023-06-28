import React, { useEffect, useState } from 'react'
import Main from './components/main'
import Board from './components/board'
import Area from './components/area'
import MyFooter from '@/components/footer/index'
import { HomeMainInfoModal, HomeAreaInfoModal, HomeBoardInfoModal } from '@/modules/home/home'
import api from '@/service/api/home/home.api'


const HomeMain = () => {

  useEffect(() => {
    return () => {
      getHomeInfo()
    }
  }, [])

  // 获取首页信息
  const getHomeInfo = async () => {
    try {
      const res = await api.getHomeList();
      if (res.data && res.status === 200) {
        setHomeInfo(() => res.data.homeInfo)
        setHomeAreaList(() => res.data.areaList)
        setHomeBoardInfo(() => res.data.boardInfo)
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  // 首页基本信息
  let [homeInfo, setHomeInfo] = useState<HomeMainInfoModal>({
    title: '',
    background: '',
    btnBackground: '',
    qrCodeImg: '',
    pcImg: '',
    boardBackground: '',
    boardTitle: ''
  })
  // 地区列表
  const [homeAreaList, setHomeAreaList] = useState<HomeAreaInfoModal[]>([])
  // 看板列表
  const [homeBoardInfo, setHomeBoardInfo] = useState<HomeBoardInfoModal>({
    activeList: [],
    noticeList: [],
    newsList: [],
    otherList: []
  })


  return (
    <div className='homeMain'>
      <div className='main' style={{ width: '100vw', height: '100vh' }}>
        <Main mainInfo={homeInfo} />
      </div>
      <div className='board' style={{ width: '100vw', height: '100vh' }}>
        <Board boardInfo={homeBoardInfo} homeInfo={homeInfo} />
      </div>
      <div className='area' style={{ width: '100vw', minHeight: '40vh' }}>
        <Area areaList={homeAreaList} />
      </div>
      <div className='thanks' style={{ width: '100vw', height: '60vh' }}>
        <MyFooter />
      </div>
    </div>
  )
}

export default HomeMain