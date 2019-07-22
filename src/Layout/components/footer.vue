<template>
  <div class="component-footer">{{msg}}</div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "IFooter"
})
export default class IFooter extends Vue {
  private msg: String = "页脚";
}
</script>
<style lang="less">
.component-footer {
  padding: 10px;
}
</style>