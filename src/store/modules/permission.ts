import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators';
import { RouteConfig } from 'vue-router';
import { asyncRoutes, constantRoutes } from '@/router/index';
import store from '@/store'

export interface IpermissionState {
  routes: RouteConfig[],
  dynamicRoutes: RouteConfig[]
}
@Module({ dynamic: true, store, name: 'permission' })
class Permission extends VuexModule implements IpermissionState {
  public routes: RouteConfig[] = []
  public dynamicRoutes: RouteConfig[] = []
  @Mutation
  private SET_ROUTES(routes: RouteConfig[]) {
    // 全部路由
    this.routes = constantRoutes.concat(routes)
    // 动态路由
    this.dynamicRoutes = routes
  }
  // 生成路由
  @Action
  public GenerateRoutes(roles: string[]) {
    let accessedRoutes
    accessedRoutes = asyncRoutes
    // if (roles.includes('admin')) {
    //   accessedRoutes = asyncRoutes
    // } else {
    //   // 路由过滤 暂不写
    // }
    this.SET_ROUTES(accessedRoutes)
  }
}
export const PermissionModule = getModule(Permission)
