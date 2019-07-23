<template>
  <div class="component-header">
    <svgicon name="menu" width="30" height="30" color="#333333"></svgicon>
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
@Component({
  name: "IHeader",
  components: { svgicon }
})
export default class IHeader extends Vue {
  private msg: String = "头部";
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