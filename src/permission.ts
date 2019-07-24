import router from '@/router';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Message } from 'element-ui'
import { Route } from 'vue-router'
import { UserModule } from '@/store/modules/user'
import { PermissionModule } from './store/modules/permission';
NProgress.configure({ showSpinner: false })
// 路由白名单
const whiteList = ['/login', '/auth-redirect']

router.beforeEach(async (to: Route, _: Route, next: any) => {
  NProgress.start()
  if (UserModule.token) {
    if (to.path === 'login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      // 判断用户是否获取其权限角色
      if (UserModule.roles.length === 0) {
        try {
          // 获取用户信息及权限角色
          await UserModule.GetUserInfo()
          const roles = UserModule.roles
          // 生成路由
          PermissionModule.GenerateRoutes(roles)
          // 动态挂载路由
          router.addRoutes(PermissionModule.dynamicRoutes)
          // 保证动态添加路由的完整性，去导航历史纪录
          next({ ...to, replace: true })
        } catch (err) {

        }
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
      NProgress.done()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})
