
<template>
  <div class="layoutLogin">
    <div class="layoutLogin__main">
      <div class="layoutLogin__main__img">
        <img src="@/assets/image/login_img.0afdf8f.png" alt />
      </div>
      <div class="layoutLogin__main__content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style lang='scss' scoped>
.layoutLogin {
  width: 100%;
  height: 100%;
  background-color: #131738;
  &__main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    &__img {
      width: 390px;
      height: 430px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>