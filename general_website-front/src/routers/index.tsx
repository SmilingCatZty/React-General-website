import React from 'react'
import { Navigate } from 'react-router-dom'
import displayRouter from './modules/display'
import errorRouter from './modules/error'
import homeRouter from './modules/home'
import registRouter from './modules/register'


// const routers = import.meta.globEager("./modules/*.tsx") { 该方法暂时用不了，会报meta上没有globEager方法 }

const routerConfig = [
  // { path: 'home', element: <Home /> }
  {
    path: '/',
    element: <Navigate to='/home/main' />
  },
  // 展示页
  ...displayRouter,
  // 首页
  ...homeRouter,
  // 错误页
  ...errorRouter,
  // 注册页
  ...registRouter
]

export default routerConfig