import axios from 'axios'

export default {
  fetch({url, method, withCredentials, data, params, headers, isLogin}) {
    return new Promise((resolve, reject) => {
      axios({url: url, method: method, withCredentials: withCredentials, data: data, params: params, headers: headers}).then(response => {
        resolve(response)
      }).catch(err => {
        console.log('apiServer.fetch failed:', err.response)
        reject(new Error(err))
      })
    })
  }
}
