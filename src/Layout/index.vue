<template>
  <div class="layout">
    <el-row>
      <el-col :span="3" class="menu-box">
        <i-menu></i-menu>
      </el-col>
      <el-col :span="20">
        <svgicon name="menu" width="50" height="50" color="#ff0044"></svgicon>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import IMenu from "./components/Menu.vue";
import svgicon from "vue-svgicon";
@Component({
  name: "Layout",
  components: { IMenu, svgicon }
})
export default class extends Vue {
  private a: String = "aaa";
}
</script>
<style lang="less">
.layout {
  .menu-box {
    height: 100vh;
    background-color: #eeeeee;
  }
}
</style>