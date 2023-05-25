import * as types from '@/redux/mutation-types'
// import { UserInfoModal } from '@/modules/login/login'

// * setToken
export const setToken = (token: string) => ({
  type: types.SET_TOKEN,
  token
})

// * setUserInfo
export const setUserInfo = (userInfo: object) => ({
  type: types.SET_USER_INFO,
  userInfo
})
