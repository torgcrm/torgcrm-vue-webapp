<template>
  <el-menu
    default-active="2"
    class="side-menu"
    @open="handleOpen"
    @close="handleClose">
    <el-menu-item-group title="CRM">
      <el-menu-item>
        <i class="el-icon-location"></i>
        <span>Заказы</span>
      </el-menu-item>
      <el-menu-item>
        <i class="el-icon-location"></i>
        <span>Клиенты</span>
      </el-menu-item>
    </el-menu-item-group>
  </el-menu>
</template>

<script>
export default {
  name: 'side-menu'
}
</script>

<style scoped>
.side-menu {
  height: 100%;
}
</style>
