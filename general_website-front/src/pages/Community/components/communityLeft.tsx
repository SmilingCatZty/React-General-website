import React, { useEffect, useState } from 'react'
import { UserOutlined, MessageOutlined, CommentOutlined, SmileOutlined, PictureOutlined, FileOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Input, Modal } from 'antd';
import '../styles/left.scss'
import { CommunityInfoModel } from '@/modules/community/community'
import { modalStyle } from '../styles/leftStyle'
import { FriendChatModel } from '@/modules/community/community'
import io, { Socket } from 'socket.io-client';
import api from '@/service/api/community/community'

let socket_io: Socket

const CommunityLeft: React.FC = () => {
  const userId: number = 1000 // 当前用户id

  const [isModalOpen, setIsModalOpen] = useState(false); // 打开聊天弹窗
  let [chatMessage, setChatMessage] = useState<string>('') // 聊天信息
  const [chatHistory] = useState<FriendChatModel[]>(
    [
      { sender_id: 1000, reciever_id: 1, status: 1, message: '在吗', send_time: 1678764176 },
      { sender_id: 2, reciever_id: 1000, status: 1, message: '在干什么', send_time: 1678764176 },
      { sender_id: 1000, reciever_id: 3, status: 1, message: '能不能借我100', send_time: 1678764176 },
      { sender_id: 4, reciever_id: 1000, status: 1, message: '在工作', send_time: 1678764176 },
      { sender_id: 1000, reciever_id: 5, status: 1, message: '现在没有闲钱', send_time: 1678764176 },
      { sender_id: 5, reciever_id: 1000, status: 1, message: '真的吗真的真的吗', send_time: 1678764176 },
      { sender_id: 1000, reciever_id: 7, status: 1, message: '骗你干啥', send_time: 1678764176 },
      { sender_id: 6, reciever_id: 1000, status: 1, message: '呜呜呜呜呜', send_time: 1678764176 },
      { sender_id: 1000, reciever_id: 9, status: 1, message: '我心伤悲', send_time: 1678764176 },
      { sender_id: 7, reciever_id: 1000, status: 1, message: '莫知我哀', send_time: 1678764176 },
    ]) // 聊天记录
  let [friendInfoList, setFriendInfoList] = useState<CommunityInfoModel>({
    friend_list: [],
    friend_apply_list: [],
    friend_accept_list: [],
    friend_reject_list: []
  }) // 好友列表

  useEffect(() => {
    // 建立与服务器的 WebSocket 连接
    socket_io = io('http://localhost:8080', { transports: ['websocket'] });
    // 监听服务器发送的消息
    socket_io.on('message', (message) => {
      console.log('服务端发的消息', message);
    });
    return () => {
      socket_io.disconnect();
      getFriendList()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 获取朋友列表
  const getFriendList = async () => {
    try {
      const res = await api.getFriendList(1000)
      if (res && res.status === 200) {
        friendInfoList = res.data
        setFriendInfoList(friendInfoList)
      }
    } catch (error) {

    }
  }

  const showModal = () => {
    setIsModalOpen(true);
  }

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // 监听输入改变
  const changeInputValue = (e: any) => {
    setChatMessage(e.target.value)
  }

  // 发送信息
  const handleSendMessage = () => {
    console.log('发送消息', chatMessage);
    const message = {
      event: "one",
      data: {
        sender_id: 1000,
        reciever_id: 1001,
        signal: "1000#1001",
        message: chatMessage
      }
    }
    // socket?.send(JSON.stringify(message)) // ws方法发送
    socket_io.emit('one', message);
  };

  return (
    <div className='pageleft'>
      <div className='left-occupy'></div>
      <div className='friends-situation'>
        <span>好友在线情况</span>
      </div>
      <div className='left-friends'>
        <ul>
          {
            friendInfoList.friend_list.map((item, index) => {
              return (
                <li key={item.account_id + '_' + index} className='friends-contain' onClick={() => showModal()}>
                  <div className='avatar-left'>
                    <div className='avatar-img'>
                      <Badge dot={item.messageInfo.length > 0
                        ? (item.messageInfo[item.messageInfo.length - 1].status ? true : false)
                        : false
                      } color='green'>
                        <Avatar shape='circle' size='large' icon={<UserOutlined />} src={item.account_avatar} />
                      </Badge>
                    </div>
                    <div className='avatar-other'>
                      <div><span className='other-user'>{item.account_name}</span></div>
                      <div><span className='other-msg'>{
                        item.messageInfo.length > 0
                          ? item.messageInfo[item.messageInfo.length - 1].message
                          : '暂无新消息'
                      }</span>
                      </div>
                    </div>

                  </div>
                  <div className='avatar-msg'>
                    <Badge count={item.noReadCount} />
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
        <div>
          <Modal title={'朋友'}
            open={isModalOpen}
            onCancel={handleCancel}
            footer={false}
            width={570}
            bodyStyle={modalStyle}
          >
            <div className='chat-content'>
              <ul>
                {
                  chatHistory.map((item, index) => {
                    return (
                      <li key={index} style={{ display: 'flex', justifyContent: (item.reciever_id === userId) ? 'end' : 'start' }}>
                        <div className='chat-item'>
                          <Avatar shape='square'
                            icon={<UserOutlined />}
                            style={{ display: (item.reciever_id === userId) ? 'none' : 'inline-block' }}
                            src='' />
                          <span>{item.message}</span>
                          <Avatar shape='square'
                            icon={<UserOutlined />}
                            style={{ display: (item.reciever_id === userId) ? 'inline-block' : 'none' }}
                            src='' />
                        </div>
                      </li>
                    )
                  })
                }
              </ul>

            </div>
            <div className='chat-enter'>
              <div className='enter-func'>
                <span><SmileOutlined /></span>
                <span><PictureOutlined /></span>
                <span><FileOutlined /></span>
              </div>
              <div className='enter-input'>
                <Input.TextArea placeholder="请输入" maxLength={120} autoSize={{ minRows: 1, maxRows: 4 }} bordered={false} onChange={(e) => changeInputValue(e)} />
                <div className='input-send'>
                  <Button onClick={() => handleSendMessage()}>发送</Button>
                </div>
              </div>
            </div>
          </Modal>
        </div>
        {/* <LeftChatModal userId={userId} ref={chatRef} /> */}
      </div>
    </div >
  )
}

export default CommunityLeft