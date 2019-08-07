
<template>
  <div class="page-news-center">{{msg}}</div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "NewsCenter"
})
export default class extends Vue {
  private msg: string = "新闻中心";
}
</script>
