<template>
  <el-table
    :data="orders"
    style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      width="70">
    </el-table-column>
    <el-table-column
      prop="products"
      label="Товар"
      :formatter="productFormatter">
    </el-table-column>
    <el-table-column
      prop="phone"
      label="Телефон">
    </el-table-column>
    <el-table-column label="Действия">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteOrder(scope.$index)"
          type="text"
          size="small">
          Remove
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'orders-table',
  props: ['orders'],
  methods: {
    productFormatter (row, column) {
      return row.products[0].title
    },
    deleteOrder (index) {
      this.orders.splice(index, 1)
    }
  },
  data () {
    return {
      tableData: [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }]
    }
  }
}
</script>

<style scoped>

</style>
