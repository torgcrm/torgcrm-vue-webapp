<template>
  <el-menu
    default-active="2"
    class="side-menu"
    @open="handleOpen"
    @close="handleClose">
    <el-menu-item-group title="CRM">
      <el-menu-item index="1">
        <i class="el-icon-location"></i>
        <router-link to="component">
          <span>Заказы</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-location"></i>
        <span>Клиенты</span>
      </el-menu-item>
    </el-menu-item-group>
  </el-menu>
</template>

<script>
export default {
  name: 'side-menu',
  methods: {
    handleOpen () {},
    handleClose () {}
  }
}
</script>

<style scoped>
.side-menu {
  height: 100%;
}
.el-side-menu ul li,
.el-side-menu ul li i,
.el-side-menu ul li a {
  color: white;
  text-decoration: none;
}
.el-side-menu ul li:hover,
.el-menu-item.is-active {
  background: rgb(10, 71, 200);
  color: white;
}
</style>
