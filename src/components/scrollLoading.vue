<template>
  <div ref="scrollContent" class="scroll-content" :class="{'scroll-x': direction == 'x', 'scroll-y': direction == 'y' }">
    <slot></slot>
    <div class="text-center scroll-content__text">{{!isOpenScroll ? loadingText : isClose ? noMoreText : ''}}</div>
  </div>
</template>
<script>
/** 
 * 如果是内部滚动条，需要设置容器宽度/高度(滚动方向有关)
 * loading:        加载方法
 * fullPageScroll: 是否全局滚动条
 * direction：     方向：x 或 y
 * loadingText:    加载中文字
 * noMoreText:     加载结束文字
 * scrollDistance: 出发加载阈值，单位px
 * isOpenScroll:     是否开启加载
 * stop():         停止加载方法    
 */

export default {
  props: {
    loading: {
      type: Function,
      required: true
    },
    fullPageScroll: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: 'y'
    },
    loadingText: {
      type: String,
      default: '加载中...'
    },
    noMoreText: {
      type: String,
      default: '没有更多了'
    },
    scrollDistance: {
      type: Number,
      default: 0
    },
    isOpenScroll: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isClose: false
    }
  },
  created() {
  },
  mounted() {
    this.addListen()
  },
  methods: {
    closeScroll() {
      this.isClose = true
      window.removeEventListener('scroll', this.linstenCallback)
    },
    openScroll() {
      this.isClose = false
      this.addListen()
    },
    linstenCallback(e) {
      if (this.isOpenScroll && !this.isClose) {
        var doc = document.body
        var scrollLength = 0
        var scrollBarLength = 0
        var contentLength = 0
        var target = document.documentElement

        if (!this.fullPageScroll) {
          doc = this.$refs.scrollContent
          target = e.target
        }

        if (this.direction == 'y') {
          contentLength = target.clientHeight
          scrollLength = target.scrollTop
          scrollBarLength = target.scrollHeight
          
        } else if (this.direction == 'x'){
          contentLength = doc.target.clientWidth
        }else{
          console.log('-------------- srollLoading: 滚动方向设置错误');
          return
        }
        if (scrollBarLength - contentLength - scrollLength - this.scrollDistance <= 0) {
          this.loading()
        }
        }
    },
    addListen() {
      let _this = this
      if (this.fullPageScroll) {
        window.addEventListener('scroll', this.linstenCallback)
      } else {
        this.$refs.scrollContent.onscroll = function(e) {
          _this.linstenCallback(e)
        }
      }
    }
  }
}
</script>
<style lang='scss' scoped>
.scroll-content {
  width: 100%;
  height: inherit;

  &.scroll-x {
    overflow-x: auto;
  }

  &.scroll-y {
    overflow-y: auto;
  }
  .scroll-content__text{
      color: #8f9298;
      margin-bottom: 20px;
  }
}
</style>