
<template>
  <div class="page-account-management">
    <router-view />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "AccountManagement"
})
export default class extends Vue {
  private msg: string = "账号管理";
}
</script>
