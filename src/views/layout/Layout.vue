<template>
  <el-container  class="app-wrapper">
    <el-header>
      <headbar />
    </el-header>
    <el-container>
      <el-aside width="200px">
        <Sidebar />
      </el-aside>
      <div>
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
.el-header{
    background-color: #B3C0D1;
    color: #fff;
	}
.el-aside{

}
</style>