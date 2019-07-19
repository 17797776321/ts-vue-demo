<template>
  <div class="layout">
    <router-view />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "Layout"
})
export default class extends Vue {
  private a: String = "aaa";
}
</script>
