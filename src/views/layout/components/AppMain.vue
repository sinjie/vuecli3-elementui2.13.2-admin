<template>
  <div class="page-content">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>
<style lang="scss" scoped>
.page-content {
	overflow-y: auto;
	width: 100%;
	height: 100%;
	padding: 0 20px;
}
</style>
