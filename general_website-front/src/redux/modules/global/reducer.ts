import { AnyAction } from 'redux'
import { GlobalState } from '@/redux/interface'
import produce from 'immer'
import * as types from '@/redux/mutation-types'

const globalState: GlobalState = {
  loginStatus: false
}

// user reducer
const global = (state: GlobalState = globalState, action: AnyAction) =>
  produce(state, draftState => {
    switch (action.type) {
      case types.SET_LOGIN_STATUS:
        draftState.loginStatus = action.loginStatus
        break
      default:
        return draftState
    }
  })

export default global
