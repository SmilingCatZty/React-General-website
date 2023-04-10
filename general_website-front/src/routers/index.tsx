import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const DisplayPage = lazy(() => import('@/pages/Display/index'))
const Home = lazy(() => import('@/pages/index'))
const HomeMain = lazy(() => import('@/pages/HomeMain'))
const HomeNews = lazy(() => import('@/pages/News'))
const HomeCommunity = lazy(() => import('@/pages/Community/index'))
const CommunityDetail = lazy(() => import('@/pages/Community/detail'))
const DataAnalysis = lazy(() => import('@/pages/DataManager/index'))
const DataManagerConsult = lazy(() => import('@/pages/DataManager/components/consult/index'))
const DataManagerActivityForecast = lazy(() => import('@/pages/DataManager/components/consult/activityForecast'))

const WithLodingComponents = (component: JSX.Element) => (
  <React.Suspense fallback={<div>loading...</div>}>
    {component}
  </React.Suspense>
)

const routerConfig = [
  {
    path: '/',
    element: <Navigate to='/home/community' />
  },
  {
    path: '/display',
    element: WithLodingComponents(<DisplayPage />)
  },
  // 正常写法
  // { path: 'home', element: <Home /> }
  // 懒加载写法
  {
    path: '/home',
    element: WithLodingComponents(<Home />),
    children: [
      {
        path: 'main',
        element: WithLodingComponents(< HomeMain />)
      },
      {
        path: 'news',
        element: WithLodingComponents(< HomeNews />)
      },
      {
        path: 'community',
        element: WithLodingComponents(<HomeCommunity />),
        children: [
          {
            path: 'post-detail',
            element: WithLodingComponents(<CommunityDetail />)
          }
        ]
      },
      {
        path: 'data-manager',
        element: WithLodingComponents(<DataAnalysis />),
        children: [
          {
            path: 'consult',
            element: WithLodingComponents(<DataManagerConsult />)
          },
          {
            path: 'activity-forecast',
            element: WithLodingComponents(<DataManagerActivityForecast />)
          }
        ]
      }
      // HomeNews
    ]
  },
]

export default routerConfig