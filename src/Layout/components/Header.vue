<template>
  <div class="component-header">
    <svgicon name="menu" width="30" height="30" color="#333333"></svgicon>
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
}
</style>