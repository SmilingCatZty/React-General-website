import './index'

interface SwiperModel {
  name?: string
  s_list: Array<DefaultObject<SwiperImgListModal>>,  // 图片列表
  s_pagination?: SwiperPaginationModal  // 轮播标记
}

interface SwiperImgListModal {
  imgId: string,  // 图片标识
  imgPath: string,  // 图片路径
  imgTitle: string  // 图片标题
  imgJumpPath?: string // 图片跳转
}

interface SwiperPaginationModal {
  clickable: boolean,  // 是否允许点击
  bulletClass?: string,  // 圆点类型
  bulletActiveClass?: string  // 圆点选中类型
}

interface SwiperTypeModal {
  effect: string,
  grabCursor: boolean
  centeredSlides: boolean
  initialSlide: number
  slidesPerView: 'auto'
  coverflowEffect: SwiperCoverFlowEffect
  navigation: SwiperCoverFlowNavigation
}

interface SwiperCoverFlowEffect {
  rotate: number
  stretch: number
  depth: number
  modifier: number
  slideShadows: boolean
}
interface SwiperCoverFlowNavigation {
  nextEl: string
  prevEl: string
}


export type {
  SwiperTypeModal,
  SwiperModel,
  SwiperImgListModal,
  SwiperPaginationModal
}