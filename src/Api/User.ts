import $Http from '@/utils/request'
export default {
  // 登陆
  Login(params: any) {
    return $Http.post('/login', params)
  },
  // 登出
  Logout(params: any) {
    return $Http.get('/logout', params)
  }
}