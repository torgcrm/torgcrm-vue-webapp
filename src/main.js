// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import LoginApp from './LoginApp'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import store from './store'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.component('icon', Icon)

const authed = true

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (authed) {
      next()
    } else {
      next('login')
    }
  } else {
    next('/')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App, LoginApp },
  template: authed ? '<App/>' : '<LoginApp />'
})
