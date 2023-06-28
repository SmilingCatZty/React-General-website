import React, { useEffect, useState } from 'react'
import { FireOutlined, ReloadOutlined } from '@ant-design/icons';
import '../styles/right.scss'
import { useNavigate } from 'react-router-dom';
import { HotNewsModel, HotPostModel } from '@/modules/community/community'
import api from '@/service/api/community'


interface CommunityRightProps { }

const CommunityRight: React.FC<CommunityRightProps> = (props) => {
  const navigateTo = useNavigate()
  let [hotPostList, setHotPostList] = useState<HotPostModel[]>([])
  let [hotNewsList, setHotNewsList] = useState<HotNewsModel[]>([])


  // 刷新
  const refresh = () => {
    getHotPostList()
  }

  // 查看更多
  const viewMore = (page: string) => {
    switch (page) {
      case 'hotPost':
        return navigateTo(page)
      case 'news':
        return navigateTo('/home/news')
    }
  }

  // 查看详情
  const viewDetail = (id: string | number) => {
    navigateTo(`post-detail?id=${id}`)
  }

  // 获取社区热帖列表
  const getHotPostList = async () => {
    try {
      const res: any = await api.getHotPostList()
      if (res.data && res.status === 200) {
        setHotPostList(() => res.data)
      }
    } catch (error) {
      console.error('社区列表页', error);
    }
  }

  // 获取官方咨询列表
  const getHotNewsList = async () => {
    try {
      const res: any = await api.getHotConsultList()
      if (res.data && res.status === 200) {
        setHotNewsList(() => res.data)
      }
    } catch (error) {
      console.error('社区列表页', error);
    }
  }

  useEffect(() => {
    return () => {
      getHotPostList()
      getHotNewsList()
    }
  }, [])

  return (
    <div className='pageright'>
      <div className='right-hot'>
        {/* 热帖 */}
        <div className='hot-post'>
          <div className='post-title'>
            <span className='title-hot'>社区热帖</span>
            <span className='title-refresh' onClick={refresh}><ReloadOutlined /> 刷新列表</span>
          </div>
          <div className='post-list'>
            <ul>
              {
                hotPostList.map((item) => {
                  return (
                    <li key={item.blog_id} onClick={() => viewDetail(item.blog_id)}><FireOutlined /> {item.blog_title}</li>
                  )
                })
              }
            </ul>
          </div>
          <div className='post-more'>
            <span onClick={() => viewMore('hotPost')}>查看更多热帖</span>
          </div>
        </div>

        {/* 热门资讯 */}
        <div className='hot-news'>
          <div className='news-title'>
            <span className='title-hot'>官方资讯</span>
          </div>
          <div className='news-list'>
            <ul>
              {
                hotNewsList.map((item) => {
                  return (
                    <li key={item._id}><FireOutlined /> {item.title}</li>
                  )
                })
              }
            </ul>
          </div>
          <div className='news-more'>
            <span onClick={() => viewMore('news')}>查看完整资讯</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommunityRight