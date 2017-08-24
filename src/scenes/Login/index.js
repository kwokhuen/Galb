import React from 'react'
import {View, Text, StyleSheet, AsyncStorage, Image, TextInput} from 'react-native'
import {Container, Content, Form, Item, Input, Label, Button} from 'native-base'
import apiService from 'services/apiService'
import Icon from 'react-native-vector-icons/FontAwesome';
// var StyleSheetDebug = require('react-native-debug-stylesheet')

class Login extends React.Component {
  static navigatorStyle = {
    navBarHidden: true
  }

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.onLogin = this.onLogin.bind(this)
  }

  onLogin() {
    console.log('this.state', this.state)
    let {username, password} = this.state
    username = username.toLowerCase()
    console.log('username', username)
    console.log('password', password)
    apiService.login(username, password).then(data => {
      console.log(data)
      return AsyncStorage.setItem('@Galb:token', data.tokens[0].token)
    }).then(() => console.log('Item is successfully stored')).catch(err => console.log(err))
  }

  renderLogo() {
    return (
      <View style={styles.logoContainer}>
        <Image
          style={{width: 200, height: 125}}
          source={require('assets/images/logo.png')}
        />
      </View>
    )
  }

  renderLoginForm() {
    return (
      <View style={{backgroundColor: '#FFFFFF', width: '70%', borderRadius: 5}} >
        <Form style={{paddingRight: 10}}>
          <Item>
            <Icon name='user' style={{color: '#808080'}} />
            <Input placeholder='Username' onChangeText={(username) => this.setState({username})}/>
          </Item>
          <Item>
            <Icon name='lock' style={{color: '#808080'}} />
            <Input placeholder='Password' password onChangeText={(password) => this.setState({password})}/>
          </Item>
        </Form>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderLogo()}
        {this.renderLoginForm()}
      </View>
      // <Container>
      //   <Content>
      //     <View>
      //       <View>
      //         <Form>
      //           <Item floatingLabel>
      //             <Label>Username</Label>
      //             <Input onChangeText={(username) => this.setState({username})}/>
      //           </Item>
      //           <Item floatingLabel last>
      //             <Label>Password</Label>
      //             <Input password onChangeText={(password) => this.setState({password})}/>
      //           </Item>
      //         </Form>
      //       </View>
      //       <View style={styles.buttonContainer}>
      //         <Button block primary onPress={this.onLogin} style={styles.button}>
      //           <Text style={styles.loginButtonText}>Log In</Text>
      //         </Button>
      //       </View>
      //     </View>
      //   </Content>
      // </Container>
    )
  }
}

const styles = StyleSheet.create({
  // buttonContainer: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   marginTop: 50
  // },
  // button: {
  //   width: '80%'
  // },
  // loginButtonText: {
  //   color: '#FFFFFF'
  // },
  container: {
    backgroundColor: '#CE5044',
    flex: 1
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: 'yellow',
    borderStyle: 'solid',
    borderWidth: 1
  }
})

export default Login
