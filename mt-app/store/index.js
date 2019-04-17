import Vuex from 'vuex'
import Vue from 'vue'
import geo from './modules/geo'
import home from './modules/home'
import changecity from './modules/changeCity'

Vue.use(Vuex)
const createStore = () => new Vuex.Store({
  modules: {
    geo,
    home,
    changecity
  },
  actions: {
    async nuxtServerInit({ commit }, { req, app}) {
      const menu = await app.$axios.get('/geo/getMenu')
      if (menu.status === 200) {
        commit('home/setMenu', menu.data)
      }
      const hotPlace = await app.$axios.get('/search/hotplace')
      if (hotPlace.status === 200) {
        commit('home/setHotPlace', hotPlace)
      }
    }
  }
})

export default createStore