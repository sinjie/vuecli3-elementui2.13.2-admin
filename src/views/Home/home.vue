<template>
  <div>
    <search-line>
      <el-select></el-select>
      <el-input placeholder="请输入名称"></el-input>
      <template v-slot:rightButtons>
        <el-button @click="testDownload">导出</el-button>
        <el-button type="primary">新增</el-button>
      </template>
    </search-line>
    <x-table v-bind="tableOption" @clickBtn="clickTabelBtns" @changeSelect="changeTableSelect" @changePage="changeTablePage"></x-table>
  </div>
</template>
<script>
import searchLine from "../../components/searchLine";
import { confirm } from "../../utils/components";

export default {
  components: {searchLine},
  data() {
    return {
      tableOption: {
        data: [
          {
            name: '主管',
            id: '01',
            start: '2020-02-02 11:12:13',
            motify: '2020-02-03 11:12:13',
            createName: '老板',
            nextName: '经理',
            nextid: '01001',
            nextstart: '2020-02-08 11:12:13',
            nextmotify: '2020-12-22 01:12:13',
            nextcreateName: '主管'
          },
          {
            name: '主管',
            id: '01',
            start: '2020-02-02 11:12:13',
            motify: '2020-02-03 11:12:13',
            createName: '老板',
            nextName: '经理',
            nextid: '01001',
            nextstart: '2020-02-08 11:12:13',
            nextmotify: '2020-12-22 01:12:13',
            nextcreateName: '主管'
          },
          {
            name: '主管',
            id: '01',
            start: '2020-02-02 11:12:13',
            motify: '2020-02-03 11:12:13',
            createName: '老板',
            nextName: '经理',
            nextid: '01001',
            nextstart: '2020-02-08 11:12:13',
            nextmotify: '2020-12-22 01:12:13',
            nextcreateName: '主管'
          },
          {
            name: '主管',
            id: '01',
            start: '2020-02-02 11:12:13',
            motify: '2020-02-03 11:12:13',
            createName: '老板',
            nextName: '经理',
            nextid: '01001',
            nextstart: '2020-02-08 11:12:13',
            nextmotify: '2020-12-22 01:12:13',
            nextcreateName: '主管'
          },
          {
            name: '主管',
            id: '01',
            start: '2020-02-02 11:12:13',
            motify: '2020-02-03 11:12:13',
            createName: '老板',
            nextName: '经理',
            nextid: '01001',
            nextstart: '2020-02-08 11:12:13',
            nextmotify: '2020-12-22 01:12:13',
            nextcreateName: '主管'
          },
          {
            name: '主管',
            id: '01',
            start: '2020-02-02 11:12:13',
            motify: '2020-02-03 11:12:13',
            createName: '老板',
            nextName: '经理',
            nextid: '01001',
            nextstart: '2020-02-08 11:12:13',
            nextmotify: '2020-12-22 01:12:13',
            nextcreateName: '主管'
          },
          {
            name: '主管',
            id: '01',
            start: '2020-02-02 11:12:13',
            motify: '2020-02-03 11:12:13',
            createName: '老板',
            nextName: '经理',
            nextid: '01001',
            nextstart: '2020-02-08 11:12:13',
            nextmotify: '2020-12-22 01:12:13',
            nextcreateName: '主管'
          },
          {
            name: '主管',
            id: '01',
            start: '2020-02-02 11:12:13',
            motify: '2020-02-03 11:12:13',
            createName: '老板',
            nextName: '经理',
            nextid: '01001',
            nextstart: '2020-02-08 11:12:13',
            nextmotify: '2020-12-22 01:12:13',
            nextcreateName: '主管'
          },
          {
            name: '主管',
            id: '01',
            start: '2020-02-02 11:12:13',
            motify: '2020-02-03 11:12:13',
            createName: '老板',
            nextName: '经理',
            nextid: '01001',
            nextstart: '2020-02-08 11:12:13',
            nextmotify: '2020-12-22 01:12:13',
            nextcreateName: '主管'
          },
          {
            name: '主管',
            id: '01',
            start: '2020-02-02 11:12:13',
            motify: '2020-02-03 11:12:13',
            createName: '老板',
            nextName: '经理',
            nextid: '01001',
            nextstart: '2020-02-08 11:12:13',
            nextmotify: '2020-12-22 01:12:13',
            nextcreateName: '主管'
          },
          
        ],
        columns: [
          {
            label: '名称',
            prop: 'name',

          },
          {
            label: 'id',
            prop: 'id',

          },
          {
            label: '创建时间',
            prop: 'start',
            width: '160'
          },
          {
            label: '更新时间',
            prop: 'motify',
            width: '160'
          },
          {
            label: '创建人',
            prop: 'createName',

          },
          {
            label: '下级名称',
            prop: 'nextName',

          },
          {
            label: '下级id',
            prop: 'nextid',

          },
          {
            label: '下级创建时间',
            prop: 'nextstart',
            width: '160'
          },
          {
            label: '下级更新时间',
            prop: 'nextmotify',
            width: '160'
          },
          {
            label: '下级创建人',
            prop: 'nextcreateName',

          },
        ],
        pages: {
          page: 1,
          size: 10,
          total: 22
        },
        hasSelection: true,
        operatingWidth: '240',
        operating: [
          {
            label: '编辑',
            name: 'edit',
          },
          {
            label: '删除',
            name: 'del'
          },
          {
            label: '查看详情',
            name: 'show'
          },
          {
            label: '操作历史',
            name: 'log'
          }
        ],
      }
    }
  },
  created() {},
  mounted() {
  },
  methods: {
    clickTabelBtns(row, btn) {
      
    },
    changeTableSelect(selection) {

    },
    changeTablePage(currentPage) {

    },
    testDownload() {
      confirm('是否确定导出？')
    },
  }
}
</script>
<style lang='scss' scoped>

</style>