import axios from 'axios'

const state = () => ({
    province: [],
    searchcity: []
})

const mutations = {
    setProvince (state, payload) {
        state.province = payload.province
    },
    setSearchcity (state, payload) {
        state.searchcity = payload.data
    }
}

const actions = {
    async setProvince ({ commit }, payload) {
        const { status, data } = await axios.get('/changecity/cities')
        if(status === 200) {
            commit('setProvince', data)
        }
    },
    async setSearchcity ({ commit }, payload) {
        const { status, data } = await axios.get('/changecity/search', {
            params: {
                key: payload.queryString
            }
        })
        if(status === 200) {
            commit('setSearchcity', data.data)
            return Promise.resolve(data.data.data)
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}