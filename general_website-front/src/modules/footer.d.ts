interface FooterInfoModal {
  imgLogo: '',
  safetyRules: string[]
  personalInfo: FooterPersonModal
  otherMsg:string
}

interface FooterPersonModal {
  userName: string
  userLocation: string
  userMobile: string | number
  userWeChat: string | number
  userQQ: string | number
}

export {
  FooterInfoModal
}