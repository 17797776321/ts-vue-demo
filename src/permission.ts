import router from '@/router';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Message } from 'element-ui'
import { Route } from 'vue-router'
import { UserModule } from '@/store/modules/user'
NProgress.configure({ showSpinner: false })
// 路由白名单
const whiteList = ['/login', '/auth-redirect']

router.beforeEach(async (to: Route, _: Route, next: any) => {
  NProgress.start()
  if (UserModule.token) { } else { }
})
