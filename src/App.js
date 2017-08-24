import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import store from './store'
import {Navigation} from 'react-native-navigation'
import {AsyncStorage} from 'react-native'
import {registerScreens} from './scenes'
import {Provider} from 'react-redux'

registerScreens(store, Provider)

class App extends Component {
  constructor(props) {
    super(props)
    AsyncStorage.clear()
    AsyncStorage.getItem('@Galb:token').then((value) => {
      if (value !== null) {
        console.log('token exist in device, render app: token value', value)
      } else {
        Navigation.showModal({
          screen: 'Login', // unique ID registered with Navigation.registerScreen
          // title: "Modal", // title of the screen as appears in the nav bar (optional)
          passProps: {}, // simple serializable object that will pass as props to the modal (optional)
          navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
          navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
          animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
        })
        // console.log('token does not exisit in device, render login app')
        // this.startLoginApp()
      }
    }).catch(err => console.log(err))
  }

  startLoginApp() {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'Login', // unique ID registered with Navigation.registerScreen
        // titleImage: require('assets/images/instagram.png'),
        title: 'Galb',
        navigatorStyle: navigatorStyle, // override the navigator style for the screen, see "Styling the navigator" below (optional)
        navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
      }
    })
  }
}

const navigatorStyle = {
  navBarTextFontSize: 18
}

export default App
