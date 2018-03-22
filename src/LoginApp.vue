<template>
  <div id="app">
    login
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
