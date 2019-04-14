import axios from 'axios'

const state = () => ({
  menu: [],
  hotPlace: [],
  searchList: [],
  tab: {
    all: [],
    feast: [],
    spa: [],
    show: [],
    journey: []
  }
})

const mutations = {
  setMenu: (state, payload) => {
    state.menu = payload.menu
  },
  setHotPlace: (state, payload) => {
    state.hotPlace = payload.data.hotPlace
  },
  setSearchList: (state, payload) => {
    state.searchList = payload.data
  },
  setTab: (state, payload) => {
    state.tab[payload.type] = payload.data
  }
}

const actions = {
  setMenu: ({ commit }, payload) => {
    commit('setMenu', payload)
  },
  setHotPlace: ({ commit }, payload) => {
    commit('setHotPlace', payload)
  },
  setSearchList: async ({ commit }, payload) => {
    const data = await axios.get('/search/top', {
      params: {
        input: payload.input
      }
    })
    commit('setSearchList', {
      data: data.data.top
    })
  },
  setTab: async ({ commit }, payload) => {
    const data = await axios.get('/search/tab', {
      params: {
        tab: payload.tab
      }
    })
    if (data.status === 200) {
      commit('setTab', {
        type: payload.tab,
        data: data.data.data.data
      })
    }
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}