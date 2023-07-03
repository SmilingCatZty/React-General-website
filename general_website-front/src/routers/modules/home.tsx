import React from "react";
import { RouteObject } from '../interface/index'
import { lazyLoad } from '@/routers/utils/lazy-load'


const homeRouter: Array<RouteObject> = [
  {
    path: "/home",
    element: lazyLoad(React.lazy(() => import("@/pages/index"))),
    meta: {
      requiresAuth: false,
      title: "主页",
      key: "homePage"
    },
    children: [
      {
        path: "/home/main",
        element: lazyLoad(React.lazy(() => import("@/pages/HomeMain/index"))),
        meta: {
          requiresAuth: false,
          title: "主菜单",
          key: "hmain"
        }
      },
      {
        path: "/home/news",
        element: lazyLoad(React.lazy(() => import("@/pages/News/index"))),
        meta: {
          requiresAuth: false,
          title: "资讯",
          key: "news"
        }
      },
      {
        path: "/home/community",
        element: lazyLoad(React.lazy(() => import("@/pages/Community/index"))),
        meta: {
          requiresAuth: false,
          title: "社区",
          key: "community"
        },
        children: [
          {
            path: "/home/community/post-detail",
            element: lazyLoad(React.lazy(() => import("@/pages/Community/detail"))),
            meta: {
              requiresAuth: false,
              title: "帖子详情",
              key: "post-detail"
            }
          },
        ]
      },
      {
        path: "/home/data-manager",
        element: lazyLoad(React.lazy(() => import("@/pages/DataManager/index"))),
        meta: {
          requiresAuth: false,
          title: "数据管理",
          key: "data-manager"
        },
        children: [
          {
            path: "/home/data-manager/analyse",
            element: lazyLoad(React.lazy(() => import("@/pages/DataManager/components/analyze"))),
            meta: {
              requiresAuth: false,
              title: "数据管理-分析",
              key: "analyse"
            }
          },
          {
            path: '/home/data-manager/consult',
            element: lazyLoad(React.lazy(() => import("@/pages/DataManager/components/consult"))),
            meta: {
              requiresAuth: false,
              title: "数据管理-资讯",
              key: "consult"
            }
          },
          {
            path: '/home/data-manager/activity-forecast',
            element: lazyLoad(React.lazy(() => import("@/pages/DataManager/components/consult/forecast"))),
            meta: {
              requiresAuth: false,
              title: "数据管理-活动预告",
              key: "forecast"
            }
          },
          {
            path: '/home/data-manager/blog',
            element: lazyLoad(React.lazy(() => import("@/pages/DataManager/components/community"))),
            meta: {
              requiresAuth: false,
              title: "社区管理-帖子审核",
              key: "blog"
            }
          },
        ]
      },
    ]
  },

]

export default homeRouter