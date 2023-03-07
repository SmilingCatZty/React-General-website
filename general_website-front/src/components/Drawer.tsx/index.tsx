import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Drawer } from 'antd';
import '@/pages/Display/styles/drawer.scss'
import { SwiperImgListModal } from '@/modules/swiper'

interface DrawerProps {
  ref: any
  funcInfo: SwiperImgListModal
}

export type CountdownHandle = {
  showDrawer: () => void;
  onClose: () => void
};

const DisplayDrawer: React.FC<DrawerProps> = forwardRef<CountdownHandle, DrawerProps>((props, ref) => {

  useImperativeHandle(ref, () => ({
    showDrawer,
    onClose
  }))


  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className='dispaly-drawer_contain'>
      <Drawer
        placement='bottom'
        // bodyStyle={{ height: '800px' }}
        mask={false}
        closable={false}
        onClose={onClose}
        open={open}
      >
        <div className='dispaly-drawer'>
          <div className='dispaly-drawer_context'>
            <img className='dispaly-drawer—img' src={props.funcInfo.imgPath} alt="" />
            <div className='dispaly-drawer—describe'>
              {props.funcInfo.imgTitle}
            </div>
          </div>
          <div className='dispaly-drawer—operate'>
            <div className='dispaly-drawer—operate_close'>
              <span onClick={() => onClose()}>Close</span>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
)

DisplayDrawer.defaultProps = {
  funcInfo: {
    imgId: '',
    imgPath: '',
    imgTitle: ''
  }
}

export default DisplayDrawer;