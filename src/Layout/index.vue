<template>
  <div class="layout">
    <div class="menu-box" :class="classOjb">
      <i-menu></i-menu>
    </div>
    <div class="content-box">
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
  .menu-box {
    height: 100vh;
    background-color: #eeeeee;
    float: left;
  }
  .hideSidebar {
    width: 3.8vw !important;
  }
  .openSidebar {
    width: 10vw !important;
  }
  .content-box {
    width: 90vw;
    height: 100vh;
    float: left;
  }
}
</style>