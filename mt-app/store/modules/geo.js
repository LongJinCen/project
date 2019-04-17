import axios from 'axios'

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
  setPosition: async ({ commit }, position) => {
    if (position) {
      commit('setPosition', position)
    } else {
      const { status, data } = await axios.get('/geo/getPosition')
      if (status === 200) {
        commit('setPosition', {
          address: data.address.match(/省(.+)市/)[1]
        })
      }
    }
  } 
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
