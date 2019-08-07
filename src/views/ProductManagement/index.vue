
<template>
  <div class="page-product-management">{{msg}}</div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "ProductManagement"
})
export default class extends Vue {
  private msg: string = "产品管理";
}
</script>
