import React from "react";
import { RouteObject } from '../interface/index'
import { lazyLoad } from '../utils/lazyLoad'

const displayRouter: Array<RouteObject> = [
  {
    path: "/register",
    element: lazyLoad(
      React.lazy(() => import("@/pages/Register/index"))
      ),
    meta: {
      requiresAuth: false,
      title: "注册页面",
      key: "register"
    }
  },
]

export default displayRouter