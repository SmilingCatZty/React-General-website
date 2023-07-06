import React from "react";
import { RouteObject } from '../interface/index'
import { lazyLoad } from '../utils/lazy-load'

const consultDetailRouter: Array<RouteObject> = [
  {
    path: "/consult-detail",
    element: lazyLoad(
      React.lazy(() => import("@/pages/News/detail"))
    ),
    meta: {
      requiresAuth: false,
      title: "资讯详情",
      key: "constule-detail"
    }
  },
]

export default consultDetailRouter