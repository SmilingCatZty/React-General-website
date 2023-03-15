import React from 'react'
import '../styles/board.scss'
import { HomeBoardModal } from '@/modules/home'
import { Tabs } from 'antd';
import { List } from 'antd';
import Swiper from '@/components/Swiper/index'
import { nanoid } from 'nanoid';
import { SwiperImgListModal } from '@/modules/swiper';


interface BoardProps {
  boardInfo: HomeBoardModal
}

const swiperList: SwiperImgListModal[] = [
  { imgId: nanoid(), imgTitle: '图片1', imgPath: '' },
  { imgId: nanoid(), imgTitle: '图片2', imgPath: '' },
  { imgId: nanoid(), imgTitle: '图片3', imgPath: '' },
  { imgId: nanoid(), imgTitle: '图片4', imgPath: '' },
]

// const tabList: TabsProps['items'] = [
//   {
//     key: '1',
//     label: `Tab 1`,
//     children: (
//       <div>123</div>
//     ),
//   },
//   {
//     key: '2',
//     label: `Tab 2`,
//     children: `Content of Tab Pane 2`,
//   },
//   {
//     key: '3',
//     label: `Tab 3`,
//     children: `Content of Tab Pane 3`,
//   },
// ]

const onChange = (v: any) => {
  console.log('boardProp');
}

const HomeBoard: React.FC<BoardProps> = (props) => {
  return (
    <div className='home-board' style={{ backgroundImage: `url(${props.boardInfo.background})` }}>
      <h1 className='board-title'>{props.boardInfo.title}</h1>
      <div className='board-main'>
        <div className='main-left'>
          <Swiper s_list={swiperList} />
        </div>
        <div className='main-right'>
          <div className='main-tabs'>

            <Tabs defaultActiveKey='1'
              items={
                Object.keys(props.boardInfo.boardList).map((item, i) => {
                  const str = item as string;
                  const list = props.boardInfo.boardList[str as keyof typeof props.boardInfo.boardList]

                  return {
                    key: item,
                    label: item,
                    children:
                      (
                        <div className='main-tabs_list'>
                          < List
                            // grid={{
                            //   column:1,
                            //   // gutter:10
                            // }}
                            split={true}
                            size='default'
                            dataSource={list}
                            renderItem={(item) =>
                              <List.Item>
                                {item.title}
                              </List.Item>
                            }
                          />

                        </div>
                      )
                  }
                })
              }
              onChange={onChange} />
          </div>
          <div className='main-more'>查看全部资讯</div>
        </div>
      </div>
    </div >
  )
}


export default HomeBoard


HomeBoard.defaultProps = {}