<template>
  <div class="nav">
    <el-breadcrumb class="app-breadcrumb" separator="/">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.name">
          <span
            v-if="item.redirect === 'noredirect' || index == levelList.length - 1"
            class="no-redirect"
          >{{ item.meta.title }}</span>
          <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      levelList: null
    };
  },
  watch: {
    $route(route) {
      this.getBreadcrumb();
    }
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      // only show routes with meta.title
      let matched = this.$route.matched.filter(
        item => item.meta && item.meta.title
      );
      const first = matched[0];
      this.levelList = matched.filter(
        item => item.meta && item.meta.title && item.meta.breadcrumb !== false
      );
    },
    isDashboard(route) {
      const name = route && route.name
      if (!name) {
        return false
      }
      return (
        name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase())
    },
    handleLink(item) {
    //   const { redirect, path } = item
    //   if (redirect) {
    //     this.$router.push(redirect)
    //     return
    //   }
    //   this.$router.push(this.pathCompile(path))
    }
  }
};
</script>
<style lang='scss' scoped>
.nav {
  position: fixed;
  z-index: 9999;
  top: 60px;
  left: 180px;
  right: 0;
  min-width: 1120px;
  padding: 10px;
  background: #fdfdfe;
  box-shadow: 0 2px 5px rgba(#456, .2);
}
</style>