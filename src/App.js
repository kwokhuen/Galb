import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import {View, Text} from 'react-native'
import appConfigs from './configs'
import store from './store'
import {Provider} from 'react-redux'

export default class App extends Component {
  render () {
    console.log('appConfig', appConfigs)
    return (
      <Provider store={store}>
        <View><Text>Connect</Text></View>
      </Provider>
    )
  }
}
