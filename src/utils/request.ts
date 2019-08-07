import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
const server = axios.create({
  baseURL: '/api',
  timeout: 1000
})
export default {
  get: (params: any) => {
    new Promise((resolve, reject) => {
      server.get(params).then(res => {
        if (res.data.code === 0) {
          return resolve(res.data)
        } else {
          reject(res.data.errorMessage)
        }
      }).catch(err => {
        reject(err)
      })
    })
  },
  post: (params: any) => {
    new Promise((resolve, reject) => {
      server.post(params).then(res => {
        if (res.data.code === 0) {
          return resolve(res.data)
        } else {
          reject(res.data.errorMessage)
        }
      }).catch(err => {
        reject(err)
      })
    })
  }
}