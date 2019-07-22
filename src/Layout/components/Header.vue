<template>
  <div class="component-header">{{msg}}</div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "IHeader"
})
export default class IHeader extends Vue {
  private msg: String = "头部";
}
</script>
