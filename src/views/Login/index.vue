
<template>
  <div class="page-login">
    <el-form ref="fomBox" class="login-form" label-position="left" :model="form" :rules="rules">
      <div class="login-title">系统登陆</div>
      <el-form-item class="input-label" prop="user">
        <svgicon name="user" width="25" height="15" color="#EEEEE3"></svgicon>
        <input type="text" v-model="form.user" placeholder="账号" />
      </el-form-item>
      <el-form-item class="input-label" prop="password">
        <svgicon name="pwd" width="25" height="15" color="#EEEEE3"></svgicon>
        <input type="password" v-model="form.password" placeholder="密码" />
      </el-form-item>
      <el-button type="primary" size="small" style="width:100%" @click="onSubmit">登陆</el-button>
    </el-form>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Form as ElForm } from "element-ui";
import svgicon from "vue-svgicon";
import { setToken } from "@/utils/cookies";
import { UserModule } from "../../store/modules/user";
@Component({
  name: "Login",
  components: { svgicon }
})
export default class Login extends Vue {
  private form = {
    user: "",
    password: ""
  };
  private rules = {
    user: [{ required: true, message: "请输入账号", trigger: "blur" }],
    password: [{ required: true, message: "请输入密码", trigger: "blur" }]
  };
  private onSubmit() {
    (this.$refs.fomBox as ElForm).validate(async (valid: Boolean) => {
      if (valid) {
        await UserModule.Login(this.form);
        this.$router.replace({ path: "/" });
      }
    });
  }
}
</script>
<style lang="less">
.page-login {
  width: 100vw;
  height: 100vh;
  background-color: #2d3a4b !important;
  .login-form {
    width: 400px;
    position: relative;
    left: calc((100vw - 400px) / 2);
    top: 300px;
    .login-title {
      font-size: 26px;
      color: #ffffff;
      text-align: center;
      line-height: 40px;
      padding-bottom: 20px;
    }
    .input-label {
      background-color: #283443;
      padding-left: 10px;
      border-radius: 5px;
      border: 1px solid #3e4957;
      input {
        width: 86%;
        background-color: #283443;
        color: #eeeee3;
        border: none;
        outline: none;
        padding-left: 10px;
      }
    }
    .el-form-item__label {
      color: #ffffff !important;
    }
  }
}
</style>
