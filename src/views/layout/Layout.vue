<template>
  <el-container  class="app-wrapper">
    <el-header class="header">
      <headbar />
    </el-header>
    <el-container class="main">
      <el-aside width="180px">
        <Sidebar />
      </el-aside>
      <div class="app-container">
        <navbar />
        <app-main />
      </div>
    </el-container>
  </el-container>
</template>
<script>
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AppMain from "./components/AppMain";
import Headbar from "./components/Headbar";

export default {
  components: {
    Navbar,
    Sidebar,
    Headbar,
    AppMain
  },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style lang='scss' scoped>
.header {
  position: fixed;
  z-index: 1000;
  width: 100%;
  min-width: 1300px;
  color: #fff;
  background: linear-gradient( #123,  #345);
}

.main {
  padding-top: 60px;
  height: 100vh;
}

.app-container {
  padding: 44px 0 20px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #fff;
}
</style>