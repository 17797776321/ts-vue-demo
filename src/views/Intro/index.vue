<template>
  <div class="page-personal-intro">{{page}}</div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "PersonalIntro"
})
export default class PersonalIntro extends Vue {
  private page: string = "个人中心";
}
</script>
