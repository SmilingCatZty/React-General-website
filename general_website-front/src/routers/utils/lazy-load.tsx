import React, { LazyExoticComponent } from 'react'

// export const lazyLoadComponents = (
//   // component: JSX.Element
//   Comp: React.LazyExoticComponent<any>
// ): React.ReactNode => {
//   return (
//     <Suspense fallback={<div>loading...</div>}>{Comp}</Suspense>
//   )
// }

export const lazyLoad = (
  Component: LazyExoticComponent<any>
) => {
  return (

    <React.Suspense fallback={<div>loading...</div>}>
      <Component />
    </React.Suspense>
  )
}
