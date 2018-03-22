import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/pages/Dashboard'
import Orders from '@/pages/Orders'
import Customers from '@/pages/Customers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders
    },
    {
      path: '/customers',
      name: 'Customers',
      component: Customers
    }
  ]
})
