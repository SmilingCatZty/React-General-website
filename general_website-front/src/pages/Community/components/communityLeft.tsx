import React, { useEffect, useRef, useState } from 'react'
import { UserOutlined, MessageOutlined, CommentOutlined, } from '@ant-design/icons';
import { Avatar, Badge } from 'antd';
import '../styles/left.scss'
import LeftChatModal from './chat'
import { CommunityInfoModel } from '@/modules/community/community'
import api from '@/service/api/community/community'

interface chatEmitType {
  showModal: () => void
}

const CommunityLeft: React.FC = () => {
  const userId: number = 1000
  let chatRef = useRef<chatEmitType>(null)

  useEffect(() => {
    return () => {
      getFriendList()
    }
  }, [])


  const getFriendList = async () => {
    try {
      const res = await api.getFriendList(1000)
      if (res && res.status === 200) {
        console.log(res);
        setFriendList(res.data)
      }
    } catch (error) {

    }
  }

  const showChatModal = (v: CommunityInfoModel) => {
    // setCurFriend(v.sender_id)
    chatRef.current?.showModal()
  };

  const [friendList, setFriendList] = useState<CommunityInfoModel[]>([])

  return (
    <div className='pageleft'>
      <div className='left-occupy'></div>
      <div className='friends-situation'>
        <span>好友在线情况</span>
      </div>
      <div className='left-friends'>
        <ul>
          {
            friendList.map((item, index) => {
              return (
                <li key={item.sender_id + '_' + index} className='friends-contain' onClick={() => showChatModal(item)}>
                  <div className='avatar-left'>
                    <div className='avatar-img'>
                      <Badge dot={item.status} color='green'>
                        <Avatar shape='circle' size='default' icon={<UserOutlined />} src='' />
                      </Badge>
                    </div>
                    <div className='avatar-other'>
                      <p><span className='other-user'>{item.reciever_id}</span></p>
                      <p><span className='other-msg'>[{item.reciever_id}]</span></p>
                    </div>

                  </div>
                  <div className='avatar-msg'>
                    <Badge count={5} />
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className='chat'>
        <div className='chat-type'>
          <MessageOutlined />
          <CommentOutlined />
        </div>
      </div>
      <div className='chat-frame'>
        <LeftChatModal userId={userId} ref={chatRef} />
      </div>
    </div>
  )
}

export default CommunityLeft