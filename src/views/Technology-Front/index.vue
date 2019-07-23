
<template>
  <div class="page-technology-front">{{pageName}}</div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "TechnologyFront"
})
export default class TechnologyFront extends Vue {
  private pageName: string = "前端";
}
</script>
