<template>
  <div>
    <el-dialog
      :visible.sync="dialogVisible"
      :title="title"
      :width="width"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :destroy-on-close="true"
      @close="$emit('close')"
    >
      <slot></slot>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogVisible=false">取 消</el-button>
        <el-button size="mini" type="primary" @click="$emit('submit')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
/**
 * @param {Boolean} visible     控制dialog显隐
 * @param {String} title 
 * @param {String} [width = '500px']      弹框宽度
 * @callback submit        点击确认回调
 * @callback close       dialog关闭前回调
 */

export default {
  components: {},
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: "500px",
    },
  },
  data() {
    return {
      dialogVisible: this.visible
    }
  },
  watch: {
    dialogVisible(val) {
      this.$emit('update:visible', val)
    },
    visible(val) {
      this.dialogVisible = val
    }
  },
  created() {},
  methods: {},
}
</script>
<style lang="scss" scoped></style>
