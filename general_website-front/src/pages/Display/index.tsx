import React from 'react'
import './styles/display.scss'
import Swiper from '@/components/swiper'
import { Anchor } from 'antd';
import { SwiperImgListModal } from '@/modules/swiper'
import DisplayIntroduce from './components/introduce'
import DisplayFunc from './components/Func'
import DisPlayOther from './components/Other'
import DisPlayTarget from './components/Target'
import { nanoid } from 'nanoid';
import {
  DisplayOtherModel, DisplayTargetModel, DisplayIntroduceModel, DisplayFuncModel
} from '@/modules/display'

const Display: React.FC = () => {

  const swiperList: SwiperImgListModal[] = [
    { imgId: nanoid(), imgTitle: '图片1', imgPath: '' },
    { imgId: nanoid(), imgTitle: '图片2', imgPath: '' },
    { imgId: nanoid(), imgTitle: '图片3', imgPath: '' },
    { imgId: nanoid(), imgTitle: '图片4', imgPath: '' },
  ]

  const introduceList: DisplayIntroduceModel = {
    title: '01 | 网站介绍',
    introduceTitle: 'General WebSite',
    introduceInfoList: [
      { description: '在这里你可以...1' },
      { description: '在这里你可以...2' },
      { description: '在这里你可以...3' },
      { description: '在这里你可以...4' },
      { description: '在这里你可以...5' },
      { description: '在这里你可以...6' }
    ]
  }


  const funcList: DisplayFuncModel = {
    title: '02 | 网站功能',
    funcInfoList: [
      { imgId: nanoid(), imgTitle: '图片1', imgPath: '' },
      { imgId: nanoid(), imgTitle: '图片2', imgPath: '' },
      { imgId: nanoid(), imgTitle: '图片3', imgPath: '' },
      { imgId: nanoid(), imgTitle: '图片4', imgPath: '' },
    ]
  }

  const otherList: DisplayOtherModel = {
    title: '03 | 其他服务支持',
    imgInfoList: [
      { imgTitle: '我是其他图片1', description: '同时支持vue2 vue3 React,支持默认安装的 swiper8 版本,支持 TS ', imgPath: 'http://rqthp68he.hn-bkt.clouddn.com/.guidao/sky1_8k.jpg' },
      { imgTitle: '我是其他图片2', description: '无论是不是TS项目都可使用,亲测有效,支持异步获取数据由于公司重构项目需要,', imgPath: 'http://rqthp68he.hn-bkt.clouddn.com/.guidao/46_shadow2_8k.jpg' },
      { imgTitle: '我是其他图片3', description: '好多关于轮播的东西都是使用swiper实现的,所以在重构中引入swiper进入了好多坑,希望这篇文档能能给予同学们帮助', imgPath: 'http://rqthp68he.hn-bkt.clouddn.com/.guidao/Shine2_8k%281%29.jpg' },
    ]
  }

  const targetList: DisplayTargetModel = {
    title: '04 | 网站目标',
    targetInfoList: [
      { targetNum: 1, targetDescription: '这里是目标1,我们要干的事情是' },
      { targetNum: 2, targetDescription: '这里是目标2,我们要干的事情是' },
      { targetNum: 3, targetDescription: '这里是目标3,我们要干的事情是' },
      { targetNum: 4, targetDescription: '这里是目标4,我们要干的事情是' }
    ]
  }

  const handleWheel = () => {
    // console.log(鼠标滚动事件);
  }


  return (
    <div className='display' onWheel={handleWheel}>
      <div style={{ width: '100vw', height: '100vh' }} >
        <Swiper s_list={swiperList} />
      </div>
      <div className='display-anchor_float'>
        <div id="part-1" className='display-anchor-introduce' style={{ width: '100vw', height: '100vh' }} >
          <DisplayIntroduce introduceInfo={introduceList} />
        </div>
        <div id="part-2" className='display-anchor-func' style={{ width: '100vw', height: '100vh' }} >
          <DisplayFunc funcInfo={funcList} />
        </div>
        <div id="part-3" className='display-anchor-other' style={{ width: '100vw', height: '100vh' }}>
          <DisPlayOther otherInfo={otherList} />
        </div>
        <div id="part-4" style={{ width: '100vw', height: '100vh' }}>
          <DisPlayTarget targetInfo={targetList} />
        </div>
      </div>
      <div className='display-anchor_body' >
        <Anchor
          items={[
            { key: 'part-1', href: '#part-1', title: '网站介绍' },
            { key: 'part-2', href: '#part-2', title: '网站功能' },
            { key: 'part-3', href: '#part-3', title: '其他服务支持' },
            { key: 'part-4', href: '#part-4', title: '网站目标' },
          ]} />
      </div>
    </div>
  )
}

export default Display