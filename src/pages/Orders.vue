<template>
  <div class="container">
    <orders-table />
  </div>
</template>

<script>
import OrdersTable from '@/components/OrdersTable'

export default {
  components: {OrdersTable},
  name: 'Orders'
}
</script>

<style scoped>

</style>
