<template>
  <div class="w-100">
    <el-table
      class="w-100"
      :data="data"
      stripe
      header-cell-class-name="table-header-cell"
    >
      <el-table-column
        v-if="hasSelection"
        fixed="left"
        type="selection"
        width="50"
        @selection-change="$emit('changeSelect')"
      ></el-table-column>
      <el-table-column
        v-for="(col, index) in columns"
        :prop="col.prop"
        :label="col.label"
        :key="col.prop + index"
        :width="col.width"
      ></el-table-column>
      <el-table-column
        v-if="operating && operating.length"
        fixed="right"
        :width="operatingWidth"
        label="操作"
      >
        <template slot-scope="scope">
          <el-button
            v-for="btn in operating"
            :key="btn.name"
            :type="btn.type || 'text'"
            :disabled="btn.disabled || false"
            @click="$emit('clickBtn', scope.row, btn)"
            >{{ btn.label }}</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="mt-16" v-if="hasPagination">
      <el-pagination
        class="pagination"
        @current-change="$emit('changePage')"
        :current-page.sync="pages.page"
        :total="pages.total || 0"
        :page-size="pages.size || 10"
        layout="total, prev, pager, next, jumper"
        background
      ></el-pagination>
    </div>
  </div>
</template>
<script>
/**
 * @param {Array} data                       表格数据
 * @param {Array} columns                    表格列配置
 *   @param {String} prop   -列字段
 *   @param {String} label  -列表头名
 *   @param {Number} width  -列宽
 * @param {Boolean} [hasSelection = false]   是否多选
 * @param {Boolean} [hasPagination = true]   是否需要分页
 * @param {Object} pages                     分页对象
 *   @param {Number} page   -当前页
 *   @param {Number} size   -每页条数
 *   @param {Number} total  -总条数
 * @param {Array} operating                  操作列按钮列表
 *   @param {String} label     -按钮名称
 *   @param {String} type      -按钮类型
 *   @param {String} name      -唯一标识
 *   @param {Boolean} disabled -是否禁用
 * @param {Number} operatingWidth            操作列宽度
 * @callback clickBtn                        操作按钮点击事件
 *   @param {Object} row   -当前行对象
 *   @param {Object} btn   -当前按钮对象
 * @callback changePage                      翻页事件
 * @callback changeSelect                    多选事件
 */

export default {
  components: {},
  props: {
    data: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
    hasSelection: {
      type: Boolean,
      default: false,
    },
    hasPagination: {
      type: Boolean,
      default: true,
    },
    pages: Object,
    operating: Array,
    operatingWidth: {
      default: "140",
    },
  },
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>
<style lang="scss" scoped>
.pagination {
  float: right;
}
</style>
