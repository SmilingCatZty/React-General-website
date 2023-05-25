import * as types from '@/redux/mutation-types'

export const setLoginStatus = (loginStatus: boolean) => ({
  type: types.SET_LOGIN_STATUS,
  loginStatus
})