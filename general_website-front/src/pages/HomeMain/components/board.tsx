import React from 'react'
import '../styles/board.scss'
import { HomeBoardInfoModal, HomeMainInfoModal } from '@/modules/home/home'
import { Tabs } from 'antd';
import { List } from 'antd';
import Swiper from '@/components/Swiper/index'
import { nanoid } from 'nanoid';
import { SwiperImgListModal } from '@/modules/swiper';
import { useNavigate } from 'react-router-dom';


interface BoardProps {
  boardInfo: HomeBoardInfoModal
  homeInfo: HomeMainInfoModal
}

// 轮播图列表
const swiperList: SwiperImgListModal[] = [
  { imgId: nanoid(), imgTitle: '图片1', imgPath: '' },
  { imgId: nanoid(), imgTitle: '图片2', imgPath: '' },
  { imgId: nanoid(), imgTitle: '图片3', imgPath: '' },
  { imgId: nanoid(), imgTitle: '图片4', imgPath: '' },
]
// 资讯类型
const consultTypes = new Map([['newsList', '新闻'], ['activeList', '活动'], ['noticeList', '通知'], ['otherList', '其他']])

const onChange = (v: any) => {
  // console.log('boardProp');
}

const HomeBoard: React.FC<BoardProps> = (props) => {
  const { boardInfo, homeInfo } = props
  const navigateTo = useNavigate()

  // 查看全部资讯
  const showMore = () => {
    navigateTo('/home/news')
  }

  return (
    <div className='home-board' style={{ backgroundImage: `url(${homeInfo.boardBackground})` }}>
      <h1 className='board-title'>{homeInfo.boardTitle}</h1>
      <div className='board-main'>
        <div className='main-left'>
          <Swiper s_list={swiperList} />
        </div>
        <div className='main-right'>
          <div className='main-tabs'>

            <Tabs defaultActiveKey='1'
              items={
                Object.keys(boardInfo).map((item, i) => {
                  const str = item as string;
                  const list = boardInfo[str as keyof typeof boardInfo] // 本质等于obj[i]，但由于ts语法问题，只能用该种方式实现

                  return {
                    key: item,
                    label: consultTypes.get(item),
                    children:
                      (
                        <div className='main-tabs_list'>
                          < List
                            grid={{
                              column: 1,
                              // gutter:10
                            }}
                            split={true}
                            size='large'
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
          <div className='main-more' onClick={showMore}>查看全部资讯</div>
        </div>
      </div>
    </div >
  )
}


export default HomeBoard


HomeBoard.defaultProps = {}