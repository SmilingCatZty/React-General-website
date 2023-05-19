export interface AuthState {
  authButtons: {
    [propName: string]: any
  }
  authRouter: string[]
}

export interface UserState {
  token: string;
  userInfo: any;
}
