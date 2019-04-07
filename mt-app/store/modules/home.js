const state = () => ({
  menu: [],
  hotPlace: []
})

const mutations = {
  setMenu: (state, payload) => {
    state.menu = payload.menu
  },
  setHotPlace: (state, payload) => {
    state.hotPlace = payload.data.hotPlace
  }
}

const actions = {
  setMenu: ({ commit }, payload) => {
    commit('setMenu', payload)
  },
  setHotPlace: ({ commit }, payload) => {
    commit('setHotPlace', payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}