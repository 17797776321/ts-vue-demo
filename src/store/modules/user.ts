import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import { getToken, setToken, removeToken } from '@/utils/cookies'
import router, { resetRouter } from '@/router'
import { PermissionModule } from './permission'
import store from '@/store'

export interface IUserState {
  token: string,
  name: string,
  avatar: string,
  introduction: string,
  roles: string[],
  email: string
}
// 动态挂在
@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
  public token = getToken() || ''
  public name = ""
  public avatar = ""
  public introduction = ""
  public roles: string[] = []
  public email = ""
}
export const UserModule = getModule(User)