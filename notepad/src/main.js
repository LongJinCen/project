import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Home from './components/Home/module'
import { routes } from './route.js'

Vue.use(Vuex)
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

const store = new Vuex.Store({
  modules: {
      Home
  }
})

const app = new Vue({
  router
}).$mount('#app')

// After you create app
window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor;
