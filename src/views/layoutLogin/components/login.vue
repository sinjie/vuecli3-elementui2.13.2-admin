<template>
  <div class="login p-16">
    <el-row>
      <h4>后台登陆系统</h4>
    </el-row>
    <el-row>
      <el-input v-model="user.email" placeholder="邮箱" @keyup.enter.native="login"></el-input>
    </el-row>
    <el-row>
      <el-input v-model="user.password" placeholder="密码" show-password @keyup.enter.native="login"></el-input>
    </el-row>
    <el-row class="login__button">
      <el-button @click="login" type="primary">登录</el-button>
    </el-row>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      user: {
        account: "",
        password: ""
      }
    };
  },
  computed: {},
  created() {},
  methods: {
    login() {}
  }
};
</script>
<style lang='scss' scoped>
.login{
  text-align: center;
  padding: 50px;
  background: #ffffff;
  .el-row{
    margin-bottom: 40px;
    .el-input,.el-button{
      width:350px;
    } 
  }
}
</style>