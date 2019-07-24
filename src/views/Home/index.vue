<template>
  <div class="page-home">{{pageName}}</div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "Home"
})
export default class Home extends Vue {
  private pageName: string = "首页";
}
</script>
