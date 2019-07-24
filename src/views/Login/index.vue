
<template>
  <div class="page-login">登录页</div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "Login"
})
export default class Login extends Vue {
  private pageName: string = "登陆";
}
</script>
<style lang="less">
.page-login {
  width: 100vw;
  height: 100vh;
  background-color: #2d3a4b !important;
}
</style>
