<template>
  <div class="component-header">
    <a href="javascript:void(0);" @click="toggleSideBar">
      <svgicon name="menu" width="30" height="30" color="#333333" :class="{'svg-left':!sidebar.isCollapse}"></svgicon>
    </a>
    <el-breadcrumb class="breadcrumb" separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import svgicon from "vue-svgicon";
import { AppModule } from "@/store/modules/app";
@Component({
  name: "IHeader",
  components: { svgicon }
})
export default class IHeader extends Vue {
  // 获取vux App树 菜单状态
  get sidebar() {
    return AppModule.sidebar;
  }
  private toggleSideBar() {
    AppModule.ToggleSideBar(false);
  }
}
</script>
<style lang="less">
.component-header {
  width: calc(100% - 20px);
  padding: 10px;
  border-bottom: 1px solid #eeeeee;
  background-color: #ffffff;
  .breadcrumb {
    display: inline-block;
    vertical-align: middle;
    padding-left: 15px;
  }
}
</style>