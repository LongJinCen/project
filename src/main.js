import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueTouch from '../node_modules/vue-touch/dist/vue-touch.js'
import { App } from './module.js'
import { routes } from './route.js'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueTouch)

Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

const store = new Vuex.Store({
  modules: {
    App
  }
})

const app = new Vue({
  router,
  store
}).$mount('#app')

// After you create app
window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor;
