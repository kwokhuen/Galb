import { Navigation } from 'react-native-navigation'

import Login from './Login'

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('Login', () => Login)
}
