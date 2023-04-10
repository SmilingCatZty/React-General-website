import React, { useEffect } from 'react'
import { Statistic, Button } from 'antd'
import './news.scss'
import { NewsInfoModal } from '@/modules/news'
import MyFooter from '@/components/Footer/index'
import dayjs from 'dayjs'
import api from '@/service/api/consult.api'

const { Countdown } = Statistic;

//   latestList: [
//     { id: '1', title: '最新消息1', path: '' },
//     { id: '2', title: '最新消息2', path: '' },
//     { id: '3', title: '最新消息3', path: '' },
//     { id: '4', title: '最新消息4', path: '' },
//     { id: '5', title: '最新消息5', path: '' },
//     { id: '6', title: '最新消息6', path: '' }
//   ],


const newsList: NewsInfoModal = {
  title: '新闻资讯',
  background: 'https://uploadstatic.mihoyo.com/contentweb/20200319/2020031921552395638.jpg',
  newActive: { title: '新活动倒计时', img: 'http://rqthp68he.hn-bkt.clouddn.com/yuanshen/ys-mende.jpeg', time: 1678604591983 },
  hotList: [
    { id: '1', title: '热点1', img: '', describe: '描述1描述1描述1描述1描述1描述1描述1', detailDescription: '', time: 1679307224 },
    { id: '2', title: '热点2', img: '', describe: '描述2描述2描述2描述2描述2描述2描述2', detailDescription: '', time: 1679307224 },
    { id: '3', title: '热点3', img: '', describe: '描述3描述3描述3描述3描述3描述3描述3', detailDescription: '', time: 1679307224 },
    { id: '4', title: '热点4', img: '', describe: '描述4描述4描述4描述4描述4描述4描述4', detailDescription: '', time: 1679307224 },
    { id: '5', title: '热点5', img: '', describe: '描述5描述5描述5描述5描述5描述5描述5', detailDescription: '', time: 1679307224 }
  ],
  allNews: [
    { key: 'latestList', title: '最新' },
    { key: 'newsList', title: '新闻' },
    { key: 'noticeList', title: '通知' },
    { key: 'activeList', title: '活动' },
    { key: 'otherList', title: '其他' },
  ]
}

const consultList = [
  { title: '活动1', img: '', time: 1678604591983 },
  { title: '活动2活动2', img: '', time: 1678604591983 },
  { title: '活动3活动3活动3', img: '', time: 1678604591983 },
  { title: '活动4', img: '', time: 1678604591983 },
  { title: '活动5', img: '', time: 1678604591983 },
  { title: '活动6活动6', img: '', time: 1678604591983 },
  { title: '活动7活动6', img: '', time: 1678604591983 },
  { title: '活动8', img: '', time: 1678604591983 },
  { title: '活动9', img: '', time: 1678604591983 },
]
// const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK

const NewsPage = () => {

  const getNewsList = async (more?: any) => {
    try {
      const res = await api.getNewsInfo(more)
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    return () => { getNewsList() }
  }, [])

  return (
    <div className='news' style={{ backgroundImage: `url(${newsList.background})` }}>
      <div className='news-hot'>
        {newsList.hotList.map((item) => {
          return (
            <div key={item.id} className='hot-box'>
              <div className='hot-image'>
                <img src={item.img} alt="" />
                <div className='hot-content'>
                  <p className='content-title'>{item.title}</p>
                  <p className='content-describe'>{item.describe}</p>
                  <p className='content-time'>{dayjs(item.time).format('YYYY/MM/DD')}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className='news-advertisement'>
        <div className='advertisement-review' style={{ backgroundImage: `url(${newsList.newActive.img})` }}>
          <div className='advertisement-title'>{newsList.newActive.title}</div>
          <div><Countdown value={newsList.newActive.time} format="D 天 H 时 m 分 s 秒" /></div>
        </div>
      </div>
      <div className='news-info'>
        <div className="info-tabs">
          {
            newsList.allNews.map((item) => {
              return (
                <Button className='tabs-btn' key={item.key} size='large'>{item.title}</Button>
              )
            })
          }
        </div>
        <div className='info-list'>
          <ul>
            {
              consultList.map((item) => {
                return (
                  <li key={item.title} className='info-list_item'>
                    <div className='item_contain'>
                      <img src={item.img} alt="" />
                      <div className='item-contain_content'>
                        <span className='contain-title'>{item.title}</span>
                        <span className='contain-time'>{dayjs(item.time).format('YYYY-MM-DD HH:mm')}</span>
                      </div>
                    </div>
                  </li>
                )
              })
            }
          </ul>
          <div className='info-load'>
            {/* <div className='load-more'> */}
            <Button className='load-more' size='large' type='primary'>加载更多...</Button>
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className='news-footer'>
        <MyFooter />
      </div>
    </div>
  )
}

export default NewsPage