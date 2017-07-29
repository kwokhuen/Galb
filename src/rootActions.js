export const USER_LOGOUT = 'USER_LOGOUT'
export const USER_LOGIN = 'USER_LOGIN'
export const APP_INIT = 'APP_INIT'

export const logout = () => {
  return {
    type: USER_LOGOUT
  }
}

export const login = () => {
  return {
    type: USER_LOGIN
  }
}

export const initApp = () => {
  return {
    type: APP_INIT
  }
}
