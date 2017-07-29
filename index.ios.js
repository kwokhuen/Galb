/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {Navigation} from 'react-native-navigation'
import {registerScreens} from './src/scenes'

registerScreens() // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Login',
      screen: 'Login', // this is a registered name for a screen
      title: 'Login'
    }
  ]
})
