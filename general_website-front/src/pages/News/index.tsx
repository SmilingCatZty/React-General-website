import React, { useEffect, useState } from 'react'
import { Statistic, Button } from 'antd'
import './index.scss'
import MyFooter from '@/components/footer/index'
import dayjs from 'dayjs'
import api from '@/service/api/consult/consult.api'
import { NewsForecastInfoModal, NewsBasicInfoModal, NewsConsultInfoModal } from '@/modules/news/news'
import { useNavigate } from 'react-router-dom'

const { Countdown } = Statistic;

const newsTypeList = [
  { key: '', title: '最新' },
  { key: 'news', title: '新闻' },
  { key: 'notice', title: '通知' },
  { key: 'active', title: '活动' },
  { key: 'other', title: '其他' },
]
// const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK

const NewsPage: React.FC = () => {
  const navigateTo = useNavigate()
  let [pageInfo, setPageInfo] = useState({ page: 1, size: 10 })
  // 页面资讯信息
  let consultInfo = { type: '' }
  // 新活动预告信息
  let [forecastInfo, setForecastInfo] = useState<NewsForecastInfoModal>({
    _id: '',
    title: 'string',
    content: 'string',
    img: 'string',
    startTime: 0
  })
  // 资讯页基本信息
  const [newsPageInfo, setNewsPageInfo] = useState<NewsBasicInfoModal>({
    _id: '',
    background: '',
    title: ''
  })
  // 热点信息列表
  const [hotList, setHotList] = useState<NewsConsultInfoModal[]>([])
  // 资讯列表
  const [consultList, setConsultList] = useState<NewsConsultInfoModal[]>([])

  // 获取资讯页头部信息
  const getNewsList = async (more?: any) => {
    try {
      const res = await api.getNewsInfo(more)
      if (res.data && res.status === 200) {
        setForecastInfo(() => res.data.forecast)
        setNewsPageInfo(() => res.data.news)
        setHotList(() => res.data.hotList)
      }
    } catch (error) {
      console.log(error);
    }
  }

  // 获取资讯列表
  const getConsultList = async () => {
    console.log('pageInfo',pageInfo);
    
    const params = {
      ...pageInfo,
      info: consultInfo
    }
    try {
      const res: any = await api.getConsultList(params)
      if (res.data && res.status === 200) {
        setConsultList(() => res.data.notice)
      }
    } catch (error) {
      console.log(error);
    }
  }

  // 加载更多
  const lodaMore = async() => {
    const page = { ...pageInfo, size: pageInfo.size + 2 }
    setPageInfo(page)
    getConsultList()
  }

  // 资讯信息查询
  const consultTypeHandle = (info: any) => {
    consultInfo.type = info.key
    getConsultList()
  }

  const viewDetail = (info: NewsConsultInfoModal) => {
    navigateTo(`/consult-detail?id=${info._id}`)
  }


  useEffect(() => {
    getNewsList()
    getConsultList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='news' style={{ backgroundImage: `url(${newsPageInfo.background})` }}>
      <div className='news-hot'>
        {hotList.map((item) => {
          return (
            <div key={item._id} className='hot-box'>
              <div className='hot-image'>
                <img src={item.img} alt="" />
                <div className='hot-content'>
                  <p className='content-title'>{item.title}</p>
                  <p className='content-describe'>{item.content}</p>
                  <p className='content-time'>{dayjs(item.createTime).format('YYYY/MM/DD')}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className='news-advertisement'>
        <div className='advertisement-review' style={{ backgroundImage: `url(${forecastInfo.img})` }}>
          <div className='advertisement-title'>{forecastInfo.title}</div>
          <div><Countdown value={forecastInfo.startTime} format="D 天 H 时 m 分 s 秒" /></div>
        </div>
      </div>
      <div className='news-info'>
        <div className="info-tabs">
          {
            newsTypeList.map((item) => {
              return (
                <Button className='tabs-btn' key={item.key} size='large' onClick={() => consultTypeHandle(item)}>{item.title}</Button>
              )
            })
          }
        </div>
        <div className='info-list'>
          <ul>
            {
              consultList.map((item) => {
                return (
                  <li key={item.title} className='info-list_item' onClick={() => viewDetail(item)}>
                    <div className='item_contain'>
                      <img src={item.img} alt="" />
                      <div className='item-contain_content'>
                        <span className='contain-title'>{item.title}</span>
                        <span className='contain-time'>{dayjs(item.createTime * 1000).format('YYYY-MM-DD HH:mm')}</span>
                      </div>
                    </div>
                  </li>
                )
              })
            }
          </ul>
          <div className='info-load'>
            {/* <div className='load-more'> */}
            <Button className='load-more' size='large' type='primary' onClick={() => lodaMore()}>加载更多...</Button>
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