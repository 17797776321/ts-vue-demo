import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
const server = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 1000
})
export default {
  get: (path: string, params: any) => {
    new Promise((resolve, reject) => {
      server.get(path, { params }).then(res => {
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
  post: (path: string, params: any) => {
    new Promise((resolve, reject) => {
      server.post(path, params).then(res => {
        if (res.data.code === 1) {
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