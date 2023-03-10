import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const DisplayPage = lazy(() => import('@/pages/Display/index'))
const Home = lazy(() => import('@/pages/index'))
const HomeMain = lazy(() => import('@/pages/HomeMain'))

const WithLodingComponents = (component: JSX.Element) => (
  <React.Suspense fallback={<div>loading...</div>}>
    {component}
  </React.Suspense>
)

const routerConfig = [
  {
    path: '/',
    element: <Navigate to='/home/home-main' />
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
        path: 'home-main',
        element: WithLodingComponents(< HomeMain />)
      }
    ]
  }
]

export default routerConfig