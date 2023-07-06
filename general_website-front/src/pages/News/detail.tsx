import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import dayjs from 'dayjs'
import './detail.scss'
import { NewsConsultInfoModal } from '@/modules/news/news'
import api from '@/service/api/consult/consult.api'


interface ConsultDetailProps { }

const ConsultDetail: React.FC<ConsultDetailProps> = (props) => {
  const { search } = useLocation()
  const consultId = search.replace('?id=', '')

  // 资讯信息
  const [consultInfo, setConsultInfo] = useState<NewsConsultInfoModal>({
    _id: '',
    title: '',
    type: '',
    img: '',
    content: '',
    createTime: 0,
  })

  const getConsultInfo = async () => {
    try {
      const res = await api.getConsultInfo(consultId)
      const { status, data } = res
      if (status === 200 && data) {
        setConsultInfo(() => data)
      }
    } catch (error) {
      console.error('资讯详情', error);

    }
  }


  useEffect(() => {
    getConsultInfo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='consult-detail'>
      <div className="detail-contain">
        <div className='detail-head'>
          <div className='head-avatar'>
            <Avatar shape='circle' size='large' icon={<UserOutlined />} src={''} />
          </div>
          <div className='head-info'>
            <div>{'官方资讯'}</div>
            <div>{dayjs(consultInfo.createTime).format('YYYY-MM-DD hh:mm:ss')}</div>
          </div>
        </div>
        <div className='detail-body'>
          <div className='body-title'>
            {consultInfo.title}
          </div>
          <div className='body-description'>
            {consultInfo.content}
          </div>
          <div className='body-img'>
            <img src={consultInfo.img} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConsultDetail