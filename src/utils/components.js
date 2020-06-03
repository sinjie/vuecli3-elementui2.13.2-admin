import {MessageBox} from 'element-ui'

export const confirm = (message, type = null, title = '提示') => {
  return MessageBox.confirm(message, title, {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    cancelButtonClass: 'message-box-cancel',
    confirmButtonClass: 'message-box-success',
    type: type,
    center: true
  })
}
