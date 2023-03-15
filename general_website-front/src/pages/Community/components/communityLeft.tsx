import React, { useState } from 'react'
import { UserOutlined, MessageOutlined, CommentOutlined, SmileOutlined, PictureOutlined, FileOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Input, Modal } from 'antd';
import '../styles/left.scss'
import { modalStyle } from '../styles/leftStyle'
import { FriendsModal, ChatContentModal } from '@/modules/community'


const CommunityLeft: React.FC = () => {

  const userId: string = 'us0'
  const [curFriend, setCurFriend] = useState('')

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (v: FriendsModal) => {
    setCurFriend(v.userName)
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [friendList] = useState<FriendsModal[]>(
    [
      { userId: 'us1', userName: 'user1', avatar: '', msgType: 'pic', isLine: false, },
      { userId: 'us2', userName: 'user2', avatar: '', msgType: 'word', isLine: false },
      { userId: 'us3', userName: 'user3', avatar: '', msgType: 'word', isLine: false },
      { userId: 'us4', userName: 'user4', avatar: '', msgType: 'pic', isLine: false },
      { userId: 'us5', userName: 'user5', avatar: '', msgType: 'word', isLine: false },
      { userId: 'us5', userName: 'user5', avatar: '', msgType: 'word', isLine: false },
      { userId: 'us5', userName: 'user5', avatar: '', msgType: 'word', isLine: false },
      { userId: 'us5', userName: 'user5', avatar: '', msgType: 'word', isLine: false },
      { userId: 'us5', userName: 'user5', avatar: '', msgType: 'word', isLine: false },
      { userId: 'us5', userName: 'user5', avatar: '', msgType: 'word', isLine: false }
    ],
  )

  const [chatContent] = useState<ChatContentModal[]>(
    [
      { userId: 'us1', content: '在吗', time: 1678764176 },
      { userId: 'us1', content: '在干什么', time: 1678764176 },
      { userId: 'us1', content: '能不能借我100', time: 1678764176 },
      { userId: 'us0', content: '在工作', time: 1678764176 },
      { userId: 'us0', content: '现在没有闲钱', time: 1678764176 },
      { userId: 'us1', content: '真的吗真的真的吗', time: 1678764176 },
      { userId: 'us0', content: '骗你干啥', time: 1678764176 },
      { userId: 'us1', content: '呜呜呜呜呜', time: 1678764176 },
      { userId: 'us1', content: '我心伤悲', time: 1678764176 },
      { userId: 'us1', content: '莫知我哀', time: 1678764176 },
    ]
  )
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
              // console.log(item.isLine)
              return (
                <li key={item.userId + '_' + index} className='friends-contain' onClick={() => showModal(item)}>
                  <div className='avatar-left'>
                    <div className='avatar-img'>
                      <Badge dot={item.isLine} color='green'>
                        <Avatar shape='circle' size='default' icon={<UserOutlined />} src='' />
                      </Badge>
                    </div>
                    <div className='avatar-other'>
                      <p><span className='other-user'>{item.userName}</span></p>
                      <p><span className='other-msg'>[{item.msgType}]</span></p>
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
        <Modal title={curFriend}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={false}
          width={570}
          bodyStyle={modalStyle}
        >
          <div className='chat-content'>
            <ul>
              {
                chatContent.map((item, index) => {
                  return (
                    <li key={index} style={{ display: 'flex', justifyContent: (item.userId === userId) ? 'end' : 'start' }}>
                      <div className='chat-item'>
                        <Avatar shape='square'
                          icon={<UserOutlined />}
                          style={{ display: (item.userId === userId) ? 'none' : 'inline-block' }}
                          src='' />
                        <span>{item.content}</span>
                        <Avatar shape='square'
                          icon={<UserOutlined />}
                          style={{ display: (item.userId === userId) ? 'inline-block' : 'none' }}
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
              <Input.TextArea placeholder="请输入" maxLength={120} autoSize={{ minRows: 1, maxRows: 4 }} bordered={false} />
              <div className='input-send'>
                <Button>发送</Button>
              </div>
            </div>
          </div>
        </Modal>

      </div>
    </div>
  )
}

export default CommunityLeft