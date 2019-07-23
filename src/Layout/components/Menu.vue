<template>
  <div class="components-mune">
    <el-menu
      default-active="1-4-1"
      style="width:100%"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      active-text-color="#ffd04b"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
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
}
</script>
<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: 100vh;
}
.el-submenu .el-menu-item {
  min-width: 0 !important;
}
</style>