import request from "@/utils/request"

export default {
  data() {
    return {
      fileList: [],
      imageUrl: '',
      uploadLoading: false
    }
  },
  methods: {
    handleAvatarSuccess() {},
    handleChange(file, fileList) {
      this.fileList = fileList
      this.uploadLoading = true
    },
    upload(param) {
      if (this.uploadValidate) {
        if (this.uploadValidate()) {
          this.fileUpload(param)
        }
      } else {
        this.fileUpload(param)
      }
      // const fileSize = Math.round((param.file.size * 100) / (1024 * 1024)) / 100
      // const types = ["png", "jpg", "jpeg", "PNG", "JPEG", "JPG"]
      // const fileName = param.file.name

      // const isType = types.some((type) => {
      //   return param.file.type.indexOf(type) >= 0
      // })

      // if (fileSize > 2) {
      //   this.$message({
      //     type: "warning",
      //     message: "文件大小不可超过2MB !",
      //   })
      //   return
      // }

      // if (fileName.length && fileName.length >= 100) {
      //   this.$message({
      //     type: "warning",
      //     message: "文件名不可超过100个字符 !",
      //   })
      //   return
      // }
    },
    fileUpload(param) {
      let file
      file = new FormData()
      file.append("file", param.file)
      file.append("fileName",  param.file.name)
      file.append("description", "")
      file.append("tagIds", [])
      // debugger
      request({
        url: '/admin/upload/fileUpload',
        method: 'post',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: file
      }).then((res) => {
        this.uploadLoading = false
        if (res.code == 10200) {
          this.imageUrl = res.data
        }
      }).catch(e => {
        this.uploadLoading = false
      })
    },
  },
}
