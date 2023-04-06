import React from 'react'
import { FireOutlined, ReloadOutlined } from '@ant-design/icons';
import '../styles/right.scss'
import { CommunityHotModal } from '@/modules/community'
import { useNavigate } from 'react-router-dom';


interface CommunityRightProps {
  hotList: CommunityHotModal
}
const CommunityRight: React.FC<CommunityRightProps> = (props) => {
  const navigateTo = useNavigate()

  const refresh = () => {
    console.log('刷新列表');
  }

  const viewMore = (page: string) => {
    switch (page) {
      case 'hotPost':
        return navigateTo(page)
      case 'news':
        return navigateTo('/home/news')
    }
  }

  const goDetail = (id: string | number) => {
    navigateTo(`post-detail?id=${id}`)
  }

  const { hotList } = { ...props }
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
                hotList.hotPostList.map((item) => {
                  return (
                    <li key={item.id} onClick={() => goDetail(item.id)}><FireOutlined /> {item.title}</li>
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
                hotList.hotNewsList.map((item) => {
                  return (
                    <li key={item.id}><FireOutlined /> {item.title}</li>
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