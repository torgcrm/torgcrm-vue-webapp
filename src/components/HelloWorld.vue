<template>
  <div>
    <el-button type="primary" @click="visible = true">Button</el-button>
    <el-slider v-model="value1"></el-slider>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      value1: 0,
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
