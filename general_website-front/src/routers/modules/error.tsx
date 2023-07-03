import React from "react";
import { lazyLoad } from "@/routers/utils/lazy-load";
import { RouteObject } from '../interface/index'

const errRouter: Array<RouteObject> = [
  {
    path: "/403",
    element: lazyLoad(React.lazy(() => import("@/pages/ErrorPage/403"))),
    meta: {
      requiresAuth: true,
      title: "403页面",
      key: "403"
    }
  },
  {
    path: "/404",
    element: lazyLoad(React.lazy(() => import("@/pages/ErrorPage/404"))),
    meta: {
      requiresAuth: false,
      title: "404页面",
      key: "404"
    }
  },
  {
    path: "/500",
    element: lazyLoad(React.lazy(() => import("@/pages/ErrorPage/500"))),
    meta: {
      requiresAuth: false,
      title: "500页面",
      key: "500"
    }
  }
]

export default errRouter