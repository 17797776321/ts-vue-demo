import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import { getToken, setToken, removeToken } from '@/utils/cookies'
import Api from '@/Api/index'
import router, { resetRouter } from '@/router'
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
  @Mutation
  private SET_ROLES(roles: string[]) {
    this.roles = roles
  }
  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token
  }
  @Action
  public async GetUserInfo() {
    if (this.token === '') {
      throw Error('GetUserInfo: token is undefined!')
    }
    this.SET_ROLES(['admin'])
  }
  @Action
  public async Login(formData: { user: string, password: string }) {
    let { user, password } = formData
    let data = await Api.User.Login(formData)
    if (data.code) {
      setToken(data.data.token)
      this.SET_TOKEN(data.data.token)
    }
    return data
    // setToken('sef457fwefn2bfth84a4ddw')
    // this.SET_TOKEN('sef457fwefn2bfth84a4ddw')
  }
}
export const UserModule = getModule(User)