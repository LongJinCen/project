const state = () => ({
  position: {
    address: ''
  }
})

const mutations = {
  setPosition(state, payload) {
    state.position.address = payload.address
  }
}

const actions = {
  setPosition:({ commit }, position) => {
    commit('setPosition', position)
  } 
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
