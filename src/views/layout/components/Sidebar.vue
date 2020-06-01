<template>
  <el-row class="tac">
    <el-col>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        @select="routepsuh"
      >
        <div v-for="(route,index) in defaultRoutes" :key="index">
          <!-- {{route.meta.title}} -->
          <el-menu-item v-if="route.children.length==1" :index="route.name" @select="routepsuh(route.name)">
            <i class="el-icon-menu"></i>
            <span slot="title" >{{route.meta.title}}</span>
          </el-menu-item>
          <el-submenu v-else :index="route.name">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{route.meta.title}}</span>
            </template>
            <el-menu-item-group v-for="(i,j) in route.children" :key="j+i.name">
              <el-menu-item :index="i.name" @select="routepsuh(i.name)">{{i.meta.title}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </div>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
import { defaultRoutes } from "@/router";
export default {
  components: {},
  data() {
    return {
      defaultRoutes
    };
  },
  created() {
    console.log(defaultRoutes);
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    routepsuh(e){
        this.$router.push({
            name:e
        })
    }
  }
};
</script>
<style lang='scss' scoped>
</style>