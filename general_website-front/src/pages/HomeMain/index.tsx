import React from 'react'
import Main from './components/main'
import Board from './components/board'
import Area from './components/area'
import MyFooter from '@/components/Footer/index'
import { HomeInfoModal } from '@/modules/home'
import { FooterInfoModal } from '@/modules/footer'


const HomeMain = () => {

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

  const footerInfo: FooterInfoModal = {
    imgLogo: '',
    safetyRules: [
      '· 健康游戏忠告：抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。',
      '· 沪公网安备31010402001113号|增值电信业务经营许可证:沪B2-20190555',
      '· 互联网违法不良信息举报邮箱: SmillingCatzty@gmail.com ',
      '· 互联网违法不良信息举报电话: 021-60371750 (工作时间: 每天00点 - 00点)',
      '· 亲爱的市民朋友,上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设,请您一旦收到来电,立即接听',
      '· 未成年成长关爱热线,021-60371740 (服务时间:8:00-23:00)',
      '我不是骗子'
    ],
    personalInfo: {
      userName: 'SmillingCat',
      userLocation: '上海',
      userMobile: 15569108988,
      userWeChat: 15569108988,
      userQQ: 1067862702
    },
    otherMsg: '说实话,我也不知道这一块应该放啥,反正咱们就随便写写吧,还望见谅'
  }

  return (
    <div className='homeMain'>
      <div className='main' style={{ width: '100vw', height: '100vh' }}>
        <Main mainInfo={homeInfo.main} />
      </div>
      <div className='board' style={{ width: '100vw', height: '100vh' }}>
        <Board boardInfo={homeInfo.board} />
      </div>
      <div className='area' style={{ width: '100vw', height: '170vh' }}>
        <Area areaInfo={homeInfo.area} />
      </div>
      <div className='thanks' style={{ width: '100vw', height: '60vh' }}>
        <MyFooter footerInfo={footerInfo} />
      </div>
    </div>
  )
}

export default HomeMain