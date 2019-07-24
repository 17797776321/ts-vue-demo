
<template>
  <div class="page-technology">{{pageName}}</div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({ name: "Technology" })
export default class Technology extends Vue {
  private pageName: string = "技术储备";
}
</script>
