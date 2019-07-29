<template>
  <div class="components-mune">
    <el-menu
      default-active="1-4-1"
      style="width:100%"
      class="el-menu-vertical-demo"
      background-color="#001529"
      active-text-color="#ffd04b"
      text-color="#FFFFFF"
      @open="handleOpen"
      @close="handleClose"
      :collapse="!sidebar.isCollapse"
    >
      <!-- 000c17 -->
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { AppModule } from "@/store/modules/app";
import { PermissionModule } from "../../store/modules/permission";
@Component({
  name: "Menu"
})
export default class Menu extends Vue {
  private isCollapse: Boolean = false;
  private handleOpen(key: String, keyPath: String) {
    console.log(key, keyPath);
  }
  private handleClose(key: String, keyPath: String) {
    console.log(key, keyPath);
  }
  get sidebar() {
    return AppModule.sidebar;
  }
  get routes() {
    return PermissionModule.routes;
  }
  private created() {
    console.log(this.routes);
  }
}
</script>
<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: 100vh;
}
.el-menu-vertical-demo.el-menu--collapse.el-menu {
  height: 100vh !important;
}
.el-submenu .el-menu-item {
  min-width: 0 !important;
}
</style>