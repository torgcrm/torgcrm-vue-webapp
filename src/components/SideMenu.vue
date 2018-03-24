<template>
  <el-menu
    default-active="2"
    class="side-menu"
    @open="handleOpen"
    @close="handleClose">
    <el-menu-item index="0">
      <router-link to="/">
        <icon class="el-icon--left" name="tachometer"></icon>
        <span>Общая информация</span>
      </router-link>
    </el-menu-item>
    <el-menu-item-group title="CRM">
      <el-menu-item index="1">
        <router-link to="orders">
          <icon class="el-icon--left" name="shopping-cart"></icon>
          <span>Заказы</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="customers">
          <icon class="el-icon--left" name="users"></icon>
          <span>Клиенты</span>
        </router-link>
      </el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="Настройки">
      <el-menu-item index="3">
        <router-link to="projects">
          <icon class="el-icon--left" name="leaf"></icon>
          <span>Проекты</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="goods">
          <i class="el-icon-goods"></i>
          <span>Товары</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="5">
        <router-link to="/categories">
          <i class="el-icon-goods"></i>
          <span>Категории товаров</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="6">
        <router-link to="projects">
          <icon class="el-icon--left" name="address-book"></icon>
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
