
<template>
  <div class="page-handle-account">{{msg}}</div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "HandleAccount"
})
export default class extends Vue {
  private msg: string = "账号分发";
}
</script>
