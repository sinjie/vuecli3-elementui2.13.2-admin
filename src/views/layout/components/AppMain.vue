<template>
  <div class="page-content">
    <router-view class="flex-column h-100"></router-view>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted(){
    this.$store.dispatch('setSeriers','FIL')
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.page-content {
	overflow-y: hidden;
	width: 100%;
	height: 100%;
	padding: 0 20px;
}
</style>
