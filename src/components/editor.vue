<template>
  <div>
    <quill-editor
      id="xj-editor"
      ref="myQuillEditor"
      v-model="content"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
      :style="{height: height, width: width}"
    >
      <div id="toolbar" slot="toolbar">
        <button class="ql-bold"></button>
        <button class="ql-italic"></button>
        <button class="ql-underline"></button>
        <button class="ql-strike"></button>
        <select class="ql-color"></select>
        <select class="ql-background"></select>
        <button class="ql-image"></button>
        <select class="ql-size">
          <option value="small">12px</option>
          <option selected>13px</option>
          <option value="large">19px</option>
          <option value="huge">32px</option>
        </select>
        <select class="ql-header">
          <option selected>正文</option>
          <option value="1">标题1</option>
          <option value="2">标题2</option>
          <option value="3">标题3</option>
          <option value="4">标题4</option>
        </select>
        <select class="ql-align"></select>
      </div>
    </quill-editor>
    <el-upload
      v-show="false"
      action=""
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      accept="image/png, image/jpeg"
      :on-change="handleChange"
      :http-request="upload"
    >
      <el-button ref="upload"></el-button>
    </el-upload>
  </div>
</template>
<script>
import upload from '../utils/fileUpload'
import { quillEditor } from "vue-quill-editor"
import "quill/dist/quill.snow.css" // 富文本编辑器外部引用样式  三种样式三选一引入即可
import * as Quill from "quill" // 富文本基于quill

export default {
  components: { quillEditor },
  mixins: [upload],
  props: {
    height: {
      type: String,
      default: '400px'
    },
    width: {
      type: String,
      default: '100%'
    }
  },
  data() {
    return {
      content: "",
      editorOption: {
        modules: {
          toolbar: {
            container: '#toolbar',
            handlers: {
              'image': (val) => {
                this.insertImgClick()
              }
            }
          }
        },
        placeholder: '请输入内容'
      },
    }
  },
  watch: {
    imageUrl(val) {
      if (val) {
        let quill = this.$refs.myQuillEditor.quill
        let index = quill.getSelection().index || 0
        quill.insertEmbed(index, 'image', val)
        quill.setSelection(index + 1)
      }else {
        this.$message.warning('图片插入失败')
      }

    }
  },
  created() {},
  methods: {
    onEditorBlur() {},
    onEditorFocus() {},
    onEditorReady() {},
    insertImgClick() {
      this.$refs.upload.$el.click()
    },
  },
}
</script>
<style lang="scss" scoped>
</style>
