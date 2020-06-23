<template>
  <div class="headBar">
    <el-row>
      <el-col :span="12">
        <div class="logn">
          <img class="logo" :src="logoImgUrl" />
          <span class="name">后台管理系统</span>
        </div>
      </el-col>
      <el-col class="text-right" :span="12">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            {{username}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { logout } from "@/api/login";
import { removeToken } from "@/utils/auth";

export default {
  components: {},
  data() {
    return {
      logoImgUrl: require("../../../assets/image/logo.png"),
      username:window.localStorage.username
    }
  },
  created() {},
  methods: {
    handleCommand(command){
      command=="logout" &&  this.logout()      
    },
    logout(){
      logout().then(response => {
        if(response.code=='10200'){
          window.localStorage.username = '';
          removeToken()
          this.$router.push({
            path:'/login'
          })
        }
      });
    }
  },
}
</script>
<style lang="scss" scoped>
.headBar {
  height: 48px;
  line-height: 48px;
  font-size: 18px;

  .name {
    position: relative;
    top: 2px;
    padding-left: 10px;
    border-left: 1px solid #eee;
  }

  .logo {
    vertical-align: middle;
    margin-right: 20px;
    width: 100px;
  }
}

.text-right {
  line-height: 1em;
  padding-top: 12px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #fff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
