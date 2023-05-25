import { AnyAction } from 'redux'
import { UserState } from '@/redux/interface'
import produce from 'immer'
import * as types from '@/redux/mutation-types'

const userState: UserState = {
  token: '',
  userInfo: {}
}

// user reducer
const user = (state: UserState = userState, action: AnyAction) =>
  produce(state, draftState => {
    switch (action.type) {
      case types.SET_USER_INFO:
        draftState.userInfo = action.userInfo
        break
      case types.SET_TOKEN:
        draftState.token = action.token
        break
      default:
        return draftState
    }
  })

export default user
