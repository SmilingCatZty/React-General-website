interface HomeInfoModal {
  main: HomeMainModal,
  board: HomeBoardModal
  area: HomeAreaModal
}

interface HomeMainModal {
  title: string,
  background: string
  btnBackground: string
  qrCodeImg: string
  pcImg: string
}

interface HomeBoardModal {
  title: string,
  background: string
  boardList: BoardListModal
}

interface HomeAreaModal {
  areaList: AreaListModal[]
}

interface BoardListModal {
  latestList: BoardItemModal[],
  newsList: BoardItemModal[],
  noticeList: BoardItemModal[],
  activeList: BoardItemModal[]
}

interface BoardItemModal {
  id: string | number
  title: string
  path: string
}

interface AreaListModal {
  title: string
  img: string
}

export {
  HomeInfoModal,
  HomeMainModal,
  HomeBoardModal,
  HomeAreaModal
}

// const homeInfo:HomeInfoModal = {
//   main: {
//     title: '',
//     background: ''
//   },
//   board: {
//     title: '',
//     boardList: {
//       latestList: [],
//       newsList: [],
//       noticeList: [],
//       activeList: []
//     }
//   },
//   area: {
//     areaList: [] 
//   }
// }