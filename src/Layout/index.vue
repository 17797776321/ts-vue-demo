<template>
  <div class="layout" :class="classOjb">
    <div class="menu-box" style="float:left">
      <i-menu></i-menu>
    </div>
    <div class="content-box" style="float:left">
      <i-header></i-header>
      <i-main></i-main>
      <i-footer></i-footer>
    </div>
    <div style="clear:both"></div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { IHeader, IMenu, IMain, IFooter } from "./components/index";
import { AppModule } from "@/store/modules/app";
@Component({
  name: "Layout",
  components: { IHeader, IMenu, IMain, IFooter }
})
export default class extends Vue {
  get classOjb() {
    return {
      hideSidebar: !AppModule.sidebar.isCollapse,
      openSidebar: AppModule.sidebar.isCollapse
    };
  }
}
</script>
<style lang="less">
.layout {
  position: relative;
  width: 100%;
  height: 100%;
}
// 闭合时样式
.layout.hideSidebar {
  width: 100%;
  .menu-box {
    width: 3.8vw !important;
    height: 100vh;
    transition: width 0.28s linear 0.28s;
  }
  .content-box {
    width: calc(100vw - 3.8vw) !important;
    height: 100vh;
    transition: width 0.28s linear 0.28s;
  }
}
// 打开时样式
.layout.openSidebar {
  width: 100%;
  .menu-box {
    width: 10vw !important;
    height: 100vh;
    transition: width 0.28s linear 0.28s;
  }
  .content-box {
    width: calc(100vw - 10vw) !important;
    height: 100vh;
    transition: width 0.28s linear 0.28s;
  }
}
</style>