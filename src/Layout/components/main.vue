<template>
  <div class="component-main">
    <router-view />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "IMain"
})
export default class IMain extends Vue {
  private msg: String = "路由入口";
}
</script>
<style lang="less">
.component-main {
}
</style>