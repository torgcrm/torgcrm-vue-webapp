import orders from '@/api/orders'

const state = {
  orders: []
}

const getters = {
  orders: state => state.orders
}

const actions = {
  getOrders ({commit}) {
    orders.getProducts(orders => {
      commit('setOrders', orders.data)
    })
  }
}

const mutations = {
  setOrders (state, orders) {
    state.orders = orders
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
