import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators';
import { getSidebarStatus, setSidebarStatus } from '@/utils/cookies'
import store from '@/store'
export interface IAppState {
  sidebar: {
    isCollapse: boolean,
    widthoutAnimation: boolean
  }
};
@Module({ dynamic: true, store, name: 'app' })
export class App extends VuexModule implements IAppState {
  public sidebar = {
    isCollapse: getSidebarStatus() !== 'close',
    widthoutAnimation: false
  }
  @Mutation
  private TOGGLE_SEDEBAR(widthoutAnimation: boolean) {
    this.sidebar.isCollapse = !this.sidebar.isCollapse
    this.sidebar.widthoutAnimation = widthoutAnimation
    if (this.sidebar.isCollapse) {
      setSidebarStatus('opened')
    } else {
      setSidebarStatus('closed')
    }
  }
  @Action
  public ToggleSideBar(widthoutAnimation: boolean) {
    this.TOGGLE_SEDEBAR(widthoutAnimation)
  }
}

export const AppModule = getModule(App)