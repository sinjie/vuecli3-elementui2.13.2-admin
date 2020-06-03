<template>
  <div class="search-line flex">
    <div class="flex-1">
      <slot></slot>
    </div>
    <div class="text-right">
      <slot name="rightButtons"></slot>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      
    }
  },
  created() {},
  methods: {
    
  }
}
</script>
<style lang='scss' scoped>
.search-line {
  padding: 10px 0 ;
  width: 100%;
}
</style>