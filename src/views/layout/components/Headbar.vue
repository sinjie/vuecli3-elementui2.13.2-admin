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
        <el-dropdown>
          <span class="el-dropdown-link">
            下拉菜单
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      logoImgUrl: require("../../../assets/image/logo.png"),
    }
  },
  created() {},
  methods: {},
}
</script>
<style lang="scss" scoped>
.headBar {
  height: 60px;
  line-height: 60px;
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
  }
}

.text-right {
  line-height: 1em;
  padding-top: 20px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #fff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
