import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { UserOutlined, SmileOutlined, PictureOutlined, FileOutlined } from '@ant-design/icons';
import { Avatar, Button, Input, Modal } from 'antd';
import '../styles/left.scss'
import { modalStyle } from '../styles/leftStyle'
import { FriendChatModel } from '@/modules/community/community'
import io, { Socket } from 'socket.io-client';


// import api from '@/service/api/community/community'

interface LeftChatProps {
  ref: any
  userId: number
}

interface LeftChatEmits {
  showModal: () => void
}

let socket_io: Socket


const LeftChat: React.FC<LeftChatProps> = forwardRef<LeftChatEmits, LeftChatProps>((props: LeftChatProps, ref) => {
  useImperativeHandle(ref, () => ({
    showModal,
  }))

  const { userId } = props
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

  useEffect(() => {
    // --- socket.io ---
    // 建立与服务器的 WebSocket 连接
    socket_io = io('http://localhost:8080', { transports: ['websocket'] });
    // 监听服务器发送的消息
    socket_io.on('message', (message) => {
      console.log('服务端发的消息', message);
    });
    // 原生websocket
    // const ws = new WebSocket('ws://localhost:80');
    // ws.onopen = () => {
    //   console.log('Connected to WebSocket server.');
    // };
    // ws.onmessage = (event) => {
    //   console.log('event', event);
    //   console.log(`Received message: ${event.data}`);
    // };
    // ws.onclose = () => {
    //   console.log('Disconnected from WebSocket server.');
    // };
    // setSocket(ws as any);
    return () => {
      // --- WebSocket ---
      // ws.close()
      // --- socket.io ---
      socket_io.disconnect();
    }
  }, [])

  return (
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
  )
})

export default LeftChat
