import React from 'react'
import { GithubOutlined, MobileOutlined, ShareAltOutlined, WechatOutlined, QqOutlined, SafetyOutlined } from '@ant-design/icons';
import './footer.scss'
import { FooterInfoModal } from '@/modules/footer'


interface FooterProps {
  footerInfo: FooterInfoModal
}

const Footer: React.FC<FooterProps> = (props) => {
  const { imgLogo, safetyRules, personalInfo, otherMsg } = { ...props.footerInfo }
  return (
    <div className='footer'>
      <div className='footer-left'>
        <img src={imgLogo} alt="" />
      </div>
      <div className='footer-right'>
        <div className='right-user'>
          <div><GithubOutlined style={{ fontSize: 16 }} />  作者名称:  {personalInfo.userName}</div>
          <div><ShareAltOutlined /> 地址:  {personalInfo.userLocation}</div>
          <div><MobileOutlined />  联系方式:  {personalInfo.userMobile}</div>
          <div><WechatOutlined style={{ fontSize: 16 }} />  微信:  {personalInfo.userWeChat}</div>
          <div><QqOutlined style={{ fontSize: 16 }} />  QQ:  {personalInfo.userQQ}</div>
        </div>
        <div className='right-other'>
          <p><SafetyOutlined style={{ fontSize: 16 }} />  {otherMsg}</p>
        </div>
        <br />
        <div className='right-safety'>
          {safetyRules.map((item) => {
            return (
              <p>{item}</p>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Footer