import React, { useRef,useState } from 'react'
import { DisplayFuncModel,DisplayFucInfoModel } from '@/modules/display'
import DisplayDrawer from '@/components/drawer/index'

interface FuncProps {
  funcInfo: DisplayFuncModel
}

interface DrawerHandle {
  showDrawer: () => void;
  onClose: () => void;
};

const DisplayFunc: React.FC<FuncProps> = (props) => {
  const displayRef = useRef<DrawerHandle>(null)

  let [funcInfo, setFuncInfo] = useState({
    imgId: '',
    imgPath: '',
    imgTitle: ''
  })

  const showDraw = (v: DisplayFucInfoModel) => {
    setFuncInfo(v)
    displayRef.current?.showDrawer()
  }

  return (
    <div className='display-func'>
      <div className='display-introduce_title'>02 | 网站功能</div>
      <div className='display-func_contain'>
        {
          props.funcInfo.funcInfoList.map((item) => {
            return (
              <div className='display-func_item' key={item.imgId} onClick={() => showDraw(item)}>
                <img className='item-img' src={item.imgPath} alt=''></img>
                <div className='item-title'><span>{item.imgTitle}</span></div>
                <div className='item-enter'><span>详情请见+</span></div>
                <div className='item-drawer'>

                </div>
              </div>
            )
          })
        }
      </div>
      <DisplayDrawer ref={displayRef} funcInfo={funcInfo} />
    </div>
  )
}

export default DisplayFunc
