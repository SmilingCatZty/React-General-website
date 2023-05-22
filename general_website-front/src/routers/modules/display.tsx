import React from "react";
import { RouteObject } from '../interface/index'
import { lazyLoad } from '../utils/lazyLoad'

const displayRouter: Array<RouteObject> = [
  {
    path: "/display",
    element: lazyLoad(
      React.lazy(() => import("@/pages/Display/index"))
      ),
    meta: {
      requiresAuth: false,
      title: "展示页面",
      key: "display"
    }
  },
]

export default displayRouter