<template>
  <div class="container">
    <orders-table/>
  </div>
</template>

<script>
import SideMenu from './SideMenu'
import OrdersTable from './OrdersTable'

export default {
  components: {
    OrdersTable,
    SideMenu},
  name: 'HelloWorld',
  data () {
    return {
      value1: 0,
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
  .el-side-menu ul {
    background: rgb(7, 71, 166);
  }

  .el-header {
    background: rgb(7, 71, 166);
    color: white;
  }
</style>
