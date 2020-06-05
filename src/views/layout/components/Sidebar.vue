<template>
  <el-row class="sidebar">
    <el-col>
      <el-menu
        :default-active="defaultActive"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        @select="routepush"
      >
        <div v-for="(route, index) in defaultRoutes" :key="index">
          <!-- {{route.meta.title}} -->
          <div v-if="!route.hidden">
            <el-menu-item
              v-if="route.children.length == 1"
              :index="route.name"
              @select="routepush(route.name)"
            >
              <i class="el-icon-menu"></i>
              <span slot="title">{{ route.meta.title }}</span>
            </el-menu-item>
            <el-submenu v-else :index="route.name">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{ route.meta.title }}</span>
              </template>
              <el-menu-item-group
                v-for="(i, j) in route.children"
                :key="j + i.name"
              >
                <el-menu-item :index="i.name" @select="routepush(i.name)">{{
                  i.meta.title
                }}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </div>
        </div>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
import { defaultRoutes } from "@/router"
export default {
  components: {},
  data() {
    return {
      defaultRoutes,
      defaultActive: 'home'
    }
  },
  created() {
    console.log(defaultRoutes)
    if (this.$route.name) {
      this.defaultActive = this.$route.name
    }else {
      let matched = this.$route.matched
      for (let i = matched.length - 1; i >= 0; i--) {
        if (matched[i].name) {
          this.defaultActive = matched[i].name
          return
        }
      }
    }

  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    routepush(e) {
      this.$router.push({
        name: e,
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.sidebar {
  height: 100%;
  overflow-y: auto;
  border-right: solid 1px #e6e6e6;
  background: #456;
  position: relative;
  z-index: 999;
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 0;
  height: 0;
}

::-webkit-scrollbar-track {
  border-radius: 0;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 0;
}
</style>
