import Modal from 'antd/es/modal/Modal'
import React, { forwardRef, useImperativeHandle, useState } from 'react'
import './index.scss'
import { Button, Input } from 'antd'
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import api from '@/service/api/login/index.api'



interface LoginModal {
  ref: any
  getAccountInfo: (info: any) => void
}

interface ModalFuncType {
  showModal: () => void
  closeModal: () => void
}

const LoginPopUp: React.FC<LoginModal> = forwardRef<ModalFuncType, LoginModal>((props: LoginModal, ref) => {

  const { getAccountInfo } = { ...props }

  useImperativeHandle(ref, () => ({
    showModal,
    closeModal
  }))


  let [isShowModal, setIsShowModal] = useState<boolean>(false) // 展示弹窗
  let [accountName, setAccountName] = useState<string>('') // 账号
  let [accountPassword, setAccountPassword] = useState<string>('') // 密码

  // 打开弹窗
  const showModal = () => {
    setIsShowModal(true)
  }

  // 关闭弹窗
  const closeModal = () => {
    setIsShowModal(false)
  }

  // 登录
  const loginClick = async () => {
    const res: any = await api.login(accountName, accountPassword)
    if (res && res.status === 201) {
      getAccountInfo(res.data.userInfo)
    }
  }

  // 账号管理
  const accountHandle = (v: any) => {
    accountName = v.target.value
    setAccountName(accountName)
  }

  // 密码管理
  const passwordHandle = (v: any) => {
    accountPassword = v.target.value
    setAccountPassword(accountPassword)
  }

  return (
    // <div >
    <Modal open={isShowModal} footer={null} onCancel={closeModal}>
      <div className='login-page'>
        {/* 主体部分 */}
        <div className='login-content'>
          <div>
            账号：<Input size="large" placeholder="large size" prefix={<UserOutlined />} onChange={(event) => accountHandle(event)}></Input>
          </div>
          <div>
            密码：<Input.Password size="large" placeholder="large size" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} prefix={<UserOutlined />} onChange={(event) => passwordHandle(event)}></Input.Password>
          </div>
        </div>
        {/* 按钮组群 */}
        <div className='login-btn'>
          <Button onClick={() => loginClick()}>登录</Button>
        </div>
        <div>

        </div>
      </div>
    </Modal >
    // </div>
  )
})

export default LoginPopUp