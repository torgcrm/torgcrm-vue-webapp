<template>
  <div class="container">
    <bar :data="dataSet" />
  </div>
</template>

<script>
import SideMenu from '@/components/SideMenu'
import OrdersTable from '@/components/OrdersTable'
import Bar from '@/components/charts/Bar'

export default {
  components: {
    Bar,
    OrdersTable,
    SideMenu
  },
  name: 'Dashboard',
  data () {
    return {
      dataSet: {
        labels: ['January', 'February'],
        datasets: [
          {
            label: 'GitHub Commits',
            backgroundColor: '#f87979',
            data: [40, 20]
          }
        ]
      }
    }
  }
}
</script>

<style>

</style>
