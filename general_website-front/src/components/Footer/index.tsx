import React from 'react'
import { GithubOutlined, MobileOutlined, ShareAltOutlined, WechatOutlined, QqOutlined, SafetyOutlined } from '@ant-design/icons';
import './footer.scss'
import { FooterInfoModal } from '@/modules/footer'


interface FooterProps {
  footerInfo?: FooterInfoModal
}

const footerInfo: FooterInfoModal = {
  imgLogo: '',
  safetyRules: [
    '· 健康游戏忠告：抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。',
    '· 沪公网安备31010402001113号|增值电信业务经营许可证:沪B2-20190555',
    '· 互联网违法不良信息举报邮箱: SmillingCatzty@gmail.com ',
    '· 互联网违法不良信息举报电话: 021-60371750 (工作时间: 每天00点 - 00点)',
    '· 亲爱的市民朋友,上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设,请您一旦收到来电,立即接听',
    '· 未成年成长关爱热线,021-60371740 (服务时间:8:00-23:00)',
    '我不是骗子'
  ],
  personalInfo: {
    userName: 'SmillingCat',
    userLocation: '上海',
    userMobile: 15569108988,
    userWeChat: 15569108988,
    userQQ: 1067862702
  },
  otherMsg: '说实话,我也不知道这一块应该放啥,反正咱们就随便写写吧,还望见谅'
}

const Footer: React.FC<FooterProps> = (props) => {
  const { imgLogo, safetyRules, personalInfo, otherMsg } = { ...footerInfo }
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
          {safetyRules.map((item, index) => {
            return (
              <p key={index}>{item}</p>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Footer