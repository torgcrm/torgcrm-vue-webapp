<template>
  <div class="container">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="250px">
          <side-menu />
        </el-aside>
        <el-container>
          <el-main>
            <orders-table />
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import SideMenu from './SideMenu'
import OrdersTable from "./OrdersTable";

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

</style>
