import fetchHelper from 'helpers/fetchHelper'
import appConfig from 'configs'
const {apiServerUrl} = appConfig

export default {
  login (username, password) {
    console.log('In apiService.login: username', username)
    console.log('In apiService.login: password', password)
    return new Promise((resolve, reject) => {
      fetchHelper.fetch({
        method: 'post',
        url: `${apiServerUrl}/account/login`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          username,
          password
        }
      }).then(response => {
        if (response.status === 200 && response.data) {
          resolve(response.data)
        } else {
          reject(new Error('Invalid login'))
        }
      }).catch(err => {
        reject(new Error(err))
      })
    })
  }
}
