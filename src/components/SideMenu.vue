<template>
  <el-menu
    default-active="2"
    class="side-menu"
    @open="handleOpen"
    @close="handleClose">
    <el-menu-item index="0">
      <router-link to="/">
        <i class="el-icon-star-on"></i>
        <span>Общая информация</span>
      </router-link>
    </el-menu-item>
    <el-menu-item-group title="CRM">
      <el-menu-item index="1">
        <router-link to="orders">
          <i class="el-icon-location"></i>
          <span>Заказы</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="customers">
          <i class="el-icon-location"></i>
          <span>Клиенты</span>
        </router-link>
      </el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="Настройки">
      <el-menu-item index="3">
        <router-link to="projects">
          <i class="el-icon-location"></i>
          <span>Проекты</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="projects">
          <i class="el-icon-location"></i>
          <span>Товары</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="5">
        <router-link to="projects">
          <i class="el-icon-location"></i>
          <span>Поставщики</span>
        </router-link>
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
.el-menu-item a {
  margin: 0px;
  padding: 0px;
  float: left !important;
  height: 100%;
  width: 100%;
}
</style>
