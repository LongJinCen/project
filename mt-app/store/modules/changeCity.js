import axios from 'axios'

const state = () => ({
    province: []
})

const mutations = {
    setProvince (state, payload) {
        state.province = payload.province
    }
}

const actions = {
    async setProvince ({ commit }, payload) {
        const { status, data } = await axios.get('https://www.meituan.com/ptapi/getprovincecityinfo/')
        console.log(status, data)
        commit('setProvince', payload)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}