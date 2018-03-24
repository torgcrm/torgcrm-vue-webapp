<template>
  <div class="container">
    <orders-table :orders="orders" />
  </div>
</template>

<script>
import OrdersTable from '@/components/OrdersTable'
import {mapGetters} from 'vuex'

export default {
  components: {OrdersTable},
  name: 'Orders',
  computed: mapGetters({
    orders: 'orders'
  }),
  created () {
    this.$store.dispatch('getOrders')
  }
}
</script>

<style scoped>

</style>
