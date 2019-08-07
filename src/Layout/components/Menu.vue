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
      <div v-for="(item,index) in routes" :key="index">
        <el-submenu
          v-if="(item.children && item.children.length>0) && (!item.meta || !item.meta.hidden)"
          :index="item.meta.link"
        >
          <template slot="title">
            <span slot="title">{{item.meta.title}}</span>
          </template>
          <el-menu-item v-for="(subItem,subIndex) in item.children" :key="subIndex" :index="subItem.meta.link">
            <svgicon :name="subItem.meta.icon" width="25" height="25" style="margin-right:10px"></svgicon>
            <span slot="title">{{subItem.meta.title}}</span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item
          v-else-if="(!item.children || item.children.length === 1) && (!item.meta || !item.meta.hidden)"
          :index="item.path"
        >
          <svgicon :name="item.meta.icon" width="25" height="25" style="margin-right:10px"></svgicon>
          <span slot="title">{{item.meta.title}}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { AppModule } from "@/store/modules/app";
import { PermissionModule } from "../../store/modules/permission";
import svgicon from "vue-svgicon";
@Component({
  name: "Menu",
  components: { svgicon }
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
    console.log("路由", this.routes);
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