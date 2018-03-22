<template>
  <div class="container">
    <customers-table />
  </div>
</template>

<script>
import CustomersTable from '@/components/CustomersTable'

export default {
  components: {CustomersTable},
  name: 'customers'
}
</script>

<style scoped>

</style>
