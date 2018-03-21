<template>
  <div id="app">
    <el-header>TorgCRM</el-header>
    <el-container>
      <el-aside width="250px" class="el-side-menu">
        <side-menu/>
      </el-aside>
      <el-container>
        <el-main>
          <router-view/>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import ElementUI from 'element-ui'
import SideMenu from './components/SideMenu'

export default {
  components: {
    SideMenu,
    ElementUI
  },
  name: 'App'
}
</script>

<style>
  @import "assets/css/main.scss";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 0px;
    padding: 0px;
  }
</style>
