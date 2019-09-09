import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
const server = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 1000
})
export default {
  get: async (path: string, params: any) => {
    const { data } = await server.get(path, { params })
    return data
  },
  post: async (path: string, params: any) => {
    const { data } = await server.post(path, params)
    return data
  }
}